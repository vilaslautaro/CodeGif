import Button from "components/Button";
import {ErrorTitle, ErrorDescription} from './Error.styles'

export default function Error(){
    return(
        <div>
        <ErrorTitle>Error 404</ErrorTitle>
        <ErrorDescription>Sorry, an error has occurred, but we can always go back to the starting point 😃</ErrorDescription>
        <Button href='/'>Go back home</Button>
        </div>
    )
}