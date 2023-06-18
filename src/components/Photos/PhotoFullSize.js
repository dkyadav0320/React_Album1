import React from "react";

import {fullSize} from "./Photos.module.scss";

import Aux1 from "../../hoc/Aux1";
import Backdrop from "../Backdrop/Backdrop";
import PropTypes from "prop-types";

const PhotoFullSize = props => (
    props.show ?
        <Aux1>
            <Backdrop show={props.show} close={props.close} />
            <figure className={fullSize} >
                <img src={props.url} alt='' />
            </figure>
        </Aux1>
    : null
);

PhotoFullSize.propTypes = {
    show: PropTypes.bool,
    url: PropTypes.any
};


export default PhotoFullSize;
