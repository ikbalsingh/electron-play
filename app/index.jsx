import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
const Clarifai = require('clarifai')

const app = new Clarifai.App({
    apiKey: 'c2dadfe7bcc04e08ab56806f519ba221'
});

// import the components

class HomePage extends React.Component {
    componentWillMount() {
        console.log(app)
    }

    handleFile(self) {
        console.log(self)
        var filesSelected = document.getElementById("input").files;
        console.log(filesSelected)
        if (filesSelected.length > 0) {
            var fileToLoad = filesSelected[0];

            var fileReader = new FileReader();

            fileReader.onload = function (fileLoadedEvent) {
                console.log(fileLoadedEvent.target.result)
                var str = fileLoadedEvent.target.result;
                var a = str.split(',')
                app.models.predict(Clarifai.GENERAL_MODEL, a[1]).then(function (response) {
                    console.log(response);
                }, function (err) {
                    console.error(err);
                });
            };

            fileReader.readAsDataURL(fileToLoad);
        }

    }

    render() {
        return (
            <form >
                <input id="input" type="file" onChange={this.handleFile.bind(this)} ></input>
            </form>
        );
    }

    callApi(selectedFile) {

    }
}

ReactDOM.render(<HomePage />,
    document.getElementById('content'),
)
