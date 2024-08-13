import { AppResources } from 'native-app-resources';

window.testEcho = () => {
    const inputValue = document.getElementById("echoInput").value;
    AppResources.echo({ value: inputValue })
}
