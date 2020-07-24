import React from "react";
import { withStyles } from "@material-ui/styles";
import formCardStyles from "./formCard";
import classnames from "classnames";
import "./scss/login.scss";
class Logos extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <h2 className={classnames(classes.logosTitle, 'textAldrich')}>Technology, Partners an Affiliations</h2>
                <div className={classnames(classes.logosContainer, 'logosSize')}>
                    <img className={classes.logos} src="https://assets-test-o-zone.s3.amazonaws.com/assets/Landing+page/Logos+compress/2019-OpenXR-small-badge-compress.png" />
                    <img className={classes.logos} src="https://assets-test-o-zone.s3.amazonaws.com/assets/Landing+page/Logos+compress/AWS+logo-compress.png" />
                    <img className={classes.logos} src="https://assets-test-o-zone.s3.amazonaws.com/assets/Landing+page/Logos+compress/Adobe-logo-vector.png" />
                    <img className={classes.logos} src="https://assets-test-o-zone.s3.amazonaws.com/assets/Landing+page/Logos+compress/GLTF-compress.png" />
                    <img className={classes.logos} src="https://assets-test-o-zone.s3.amazonaws.com/assets/Landing+page/Logos+compress/W3C-Logo-compress.png" />
                    <img className={classes.logos} src="https://assets-test-o-zone.s3.amazonaws.com/assets/Landing+page/Logos+compress/Khronos-logo.png" />
                    <img className={classes.logos} src="https://assets-test-o-zone.s3.amazonaws.com/assets/Landing+page/Logos+compress/react-logo.png" />
                    <img className={classes.logos} src="https://assets-test-o-zone.s3.amazonaws.com/assets/Landing+page/Logos+compress/stripe-payment-logo_1-compress.png" />
                    <img className={classes.logos} src="https://assets-test-o-zone.s3.amazonaws.com/assets/Landing+page/Logos+compress/twilio-compress.png" />
                    <img className={classes.logos} src="https://assets-test-o-zone.s3.amazonaws.com/assets/Landing+page/Logos+compress/webGL-compress.png" />
                    <img className={classes.logos} src="https://assets-test-o-zone.s3.amazonaws.com/assets/Landing+page/Logos+compress/google-chrome-2-compress.png" />
                    <img className={classes.logos} src="https://assets-test-o-zone.s3.amazonaws.com/assets/Landing+page/Logos+compress/Logo-autodesk.png" />
                    <img className={classes.logos} src="https://assets-test-o-zone.s3.amazonaws.com/assets/Landing+page/Logos+compress/VWS-logo_highres.png" />
                </div>

            </div>
        );
    }
}

export default withStyles(formCardStyles)(Logos);