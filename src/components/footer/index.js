import { Col, Row, Button } from "react-bootstrap"
import heart from "../../assets/heart.png"
import up from "../../assets/up-arrow.png"

import "./styles.css"

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    return (
        <div className="footer-oguex">
            <Row className="footer-content">
                <Col xs={12} sm={12} md={5}>
                    <p className="footer-content">&copy; 2021 OGUEX. Todos los derechos reservados.</p>
                </Col>
                <Col xs={12} sm={12} md={5}>
                    <p className="footer-content">Creado con&nbsp;<img src={heart} width="16" alt="heart-icon" />&nbsp;por Rodrigo Alvarez</p>
                </Col>
                <Col xs={12} sm={12} md={2}>
                    <Button className="arrow" onClick={scrollToTop}>
                        <img src={up} width="28" alt="up-arrow" />
                    </Button>
                </Col>
            </Row>
        </div>
    )
}

export default Footer