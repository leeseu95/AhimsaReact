    class MyApp extends React.Component {
        
        constructor(props){
            super(props);
            this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
            this.handleAddOptions = this.handleAddOptions.bind(this);
            this.handlePick = this.handlePick.bind(this);
            this.state = {
                title: "My Application",
                subtitle: "Put your life in the hands of a computer.",
                options: ["options1", "option2", "option3"]
            }
        }

        handleDeleteOptions(){
            this.setState((prevState) => {
                return {
                    title: prevState.title + "New title",
                    options : []
                };
            });
        }

        handlePick(){
            const randomNum = Math.floor(Math.random() * this.state.options.length);
            const option = this.state.options[randomNum];
            alert(option);
        }
        
        handleAddOptions(newComment) {
            newComment.preventDefault();
            const opt = newComment.target.elements.option.value;
            // console.log(opt);
            if(opt && !this.state.options.includes(opt)) {
                this.setState((prevState) => {
                    return {
                        options: prevState.options.concat(opt)
                    };
                });
            } else {
                alert("No se puede agregar comentario duplicado" + opt);
            }
        }

        render () {
        return (
            <div>
            <Header title={this.state.title} subtitle={this.state.subtitle}/>
            <Action 
            hasOptions = {this.state.options.length > 0} 
            handlePick = {this.handlePick}
            />
            <Options 
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            />
            <AddOption handleAddOptions={this.handleAddOptions}/>
            </div>
            );
        }
    }

    class Header extends React.Component {
        render () {
        console.log(this.props);
        return (
            <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.subtitle}</h2>
            </div>
            );
        }
    }

    class Action extends React.Component {

        render () {
            return (
                <div>
                <button onClick={this.props.handlePick} disabled={!this.props.hasOptions} >Random Comment</button>
                </div>
                );
            }
    }

    class Options extends React.Component {
        render () {
            return (
                <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {
                    this.props.options.map((option)=><Option key={option} optionText={option}/>)
                }
                </div>
            );
        }
    }

    class Option extends React.Component {
        render () {
        return (
            <div>
                {this.props.optionText}
            </div>
            );
        }
    }

    class AddOption extends React.Component {
        render (){
            console.log(this.props.handleAddOptions)
            return (
                <div>
                    <form onSubmit={this.props.handleAddOptions}>
                        <input type="text" name="option"/>
                        <button>Add option</button>
                    </form>
                </div>
                );
            }
        }

    ReactDOM.render(<MyApp />,document.getElementById('app'));