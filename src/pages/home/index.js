import { Container, Row, Col, Button } from "react-bootstrap"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import img_overlay from "../../assets/Oguex-Overlay.png"
import electric from "../../assets/electric2.jpg"
import electric_icon from "../../assets/electric-icon.png"
import ks from "../../assets/ks-o.png"
import caracol from "../../assets/caracol-icon.png"
import clavija from "../../assets/icon-clavija.png"
import enchunfe from "../../assets/icon-enchufe.png"
import c1 from "../../assets/carousel-1.png"
import c2 from "../../assets/carousel-2.png"
import c3 from "../../assets/carousel-3.png"
import lg1 from "../../assets/logo-1.png"
import lg2 from "../../assets/logo-2.png"
import lg3 from "../../assets/logo-3.png"
import lg4 from "../../assets/logo-4.png"
import lg5 from "../../assets/logo-5.png"
import lg6 from "../../assets/logo-6.png"
import lg7 from "../../assets/logo-7.png"
import lg8 from "../../assets/logo-8.png"
import lg9 from "../../assets/logo-9.png"
import lg10 from "../../assets/logo-10.png"
import logo from "../../assets/logo-bl.png"
import twitter from "../../assets/twitter.png"
import fb from "../../assets/facebook.png"
import skype from "../../assets/skype.png"

import "./styles.css"
import Footer from "../../components/footer";

const services_data = [
    {
        icon: caracol,
        title: "Instalaciones Eléctricas",
        body: [
            "Diseño, proyección, elaboración de planos y memorias de cálculo de instalaciones eléctricas comerciales e industriales.",
            "Instalación y mantenimiento eléctrico de sistemas comerciales e industriales.",
            "Proyectos de iluminación.",
            "Sistemas de puesta a tierra y protección contra descargas atmosféricas.",
            "Proyectos fotovoltaicos."
        ]
    },
    {
        icon: clavija,
        title: "Instalaciones Especiales",
        body: [
            "Videovigilancia.",
            "Detección de incendio.",
            "Control de acceso.",
            "Audio ambiental.",
            "Cableado estructurado.",
            "Redes Wi-Fi.",
            "Alarmas de intrusión."
        ]
    },
    {
        icon: enchunfe,
        title: "Gestión Energética",
        body: [
            "Tramites ante CFE (Contratos nuevos, de interconexión, aumento o disminución de carga, multas, etc).",
            "Unidad verificadora de instalaciones eléctricas.",
            "Programas de ahorro energético.",
            "Código de red.",
            "Cambio de tarifa eléctrica.",
            "Mejora de factor de potencia."
        ]
    }
]

const carousel_imgs = [c1, c2, c3];

const clients_logos = [lg1, lg2, lg3, lg4, lg5, lg6, lg7, lg8, lg9, lg10]

const Home = () => {
    return (
        <div className="oguex-bg">
            <div className="home">
                <Row className="center-content margin-top-small padding-small no-margin">
                    <Col xs={12} sm={12} md={6}>
                        <p className="white-text upper-case no-margin-bottom">Oguex soluciones eléctricas </p>
                        <h2 className="white-text fat-text">Tus instalaciones eléctricas en manos de expertos</h2>
                        <div className="margin-top-small-percent">
                            <Button className="round-btn orange-btn upper-case">Servicios</Button>
                            <Button className="round-btn white-btn upper-case">Contáctanos</Button>
                        </div>

                    </Col>
                    <Col xs={12} sm={12} md={6} className="img-overlay">
                        <img src={img_overlay}
                            className="overlay"
                            alt="overlay_image_1" />
                    </Col>
                </Row>

            </div>
            <Container className="margin-top-small">
                <Row className="card-info">
                    <Col xs={12} sm={4} className="no-padding">
                        <img src={electric} className="image-card" alt="electric-img" />
                    </Col>
                    <Col xs={12} sm={8} className="content-card">
                        <h4>Oguex Soluciones Eléctricas</h4>
                        <p>Somos una empresa integrada por un equipo de ingenieros y técnicos con vasta experiencia a nivel residencial, comercial e industrial.</p>
                        <Button className="round-btn orange-btn">Conoce mas</Button>
                    </Col>
                </Row>
            </Container>
            <div className="margin-top-small side-margins-large">
                <Row>
                    <Col xs={12} sm={12} md={6}>
                        <div className="center-content">
                            <img src={electric_icon} width={28} height={28} alt="electric-icon" className="margin-small" />
                            <p className="about-text">
                                UN POCO DE NOSOTROS
                            </p>
                        </div>
                        <div className="align-start">
                            <span className="big-text">Instalación y mantenimiento de&nbsp;</span>
                            <span className="big-text orange-text">sistemas eléctricos</span>
                        </div>
                        <div className="align-start margin-top-small">
                            <p>
                                OGUEX Busca brindar la mas alta calidad en cuanto a planeación, instalación, reparación y mantenimiento. Con lo que se pretende lograr un correcto y eficiente funcionamiento en los sistemas eléctricos de nuestros clientes, coadyuvando el crecimiento y desarrollo de sus actividades.
                                <p style={{ marginTop: "12px" }}>
                                    No sólo nos enfocamos en sus necesidades actuales, también visualizando sus requerimientos futuros, ya sea por crecimiento, expansión, ocupación o actualización, trabajando para obtener mayores rendimientos y tiempos de vida para sus equipos e instalaciones.
                                </p>
                                <p>
                                    Sus instalaciones eléctricas en manos de los expertos,
                                </p>
                                <p className="bold-text">
                                    ¡Estamos para servirle!
                                </p>
                            </p>
                            <Row>
                                <Col xs={12} sm={6} className="center-content">
                                    <Button className="orange-btn round-btn upper-case">Código de red</Button>
                                </Col>
                                <Col xs={12} sm={6} className="center-content">
                                    <Button className="orange-btn round-btn upper-case">Cambio de tarifa</Button>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} className="about-image-col">
                        <img src={ks} alt="ks" className="about-image" />
                    </Col>
                </Row>
            </div>
            <div className="side-margins-large margin-top-small">
                <div className="center-content">
                    <img src={electric_icon} width={28} height={28} alt="electric-icon" className="margin-small" />
                    <p className="about-text upper-case">
                        Servicios
                    </p>
                </div>
                <h2 className="fat-text">¿Qué servicios ofrecemos?</h2>
                <Row className="margin-top-small">
                    {
                        services_data.map((data, idx) => {
                            return (
                                <Col key={idx} xs={12} sm={6} md={4}>
                                    <img src={data.icon} alt={`icon-${idx}`} style={{ width: "64px" }} />
                                    <div className="align-start margin-top-small-percent line-space-medium">
                                        <p className="upper-case services-header">{data.title}</p>
                                        <ul>
                                            {data.body.map(b => {
                                                return <li>{b}</li>
                                            })}
                                        </ul>
                                    </div>
                                </Col>
                            )
                        })
                    }
                    <div>
                        <Button className="orange-btn round-btn margin-small upper-case">Conoce más</Button>
                    </div>
                </Row>
            </div>
            <div className="carousel-style">
                <Carousel autoPlay infiniteLoop interval={5000} showStatus={false} stopOnHover={false} swipeable centerMode showThumbs={false} width="100%">
                    {
                        carousel_imgs.map((img, idx) => {
                            return (
                                <div>
                                    <img src={img} alt={`carousel-${idx}`} style={{ height: "40%" }} />
                                </div>
                            )
                        })
                    }
                </Carousel>
            </div>
            <div className="margin-top-small">
                <div className="center-content">
                    <img src={electric_icon} width={28} height={28} alt="electric-icon" className="margin-small" />
                    <p className="about-text upper-case">
                        Clientes
                    </p>
                </div>
                <h2 className="fat-text padding-small" >
                    Algunos de nuestros clientes
                </h2>
                <Row style={{ width: "100%", padding: "12px" }}>
                    {
                        clients_logos.map((lg, idx) => {
                            return (
                                <Col className="space-margin" xs={4} sm={3}>
                                    <img src={lg} style={{ width: "20vmin" }} alt={`client-${idx}`} />
                                </Col>
                            )
                        })
                    }
                    <div className="margin-top-small">
                        <Button className="orange-btn round-btn margin-small upper-case">Contáctanos</Button>
                    </div>
                </Row>
            </div>
            <div className="margin-top-small contact-bg">
                <Container style={{ padding: "12px" }}>
                    <Row style={{ margin: "24px auto" }}>
                        <Col className="center-content">
                            <img src={logo} style={{ width: "30vh" }} alt="oguex-logo" />
                        </Col>
                        <Col className="center-content margin-small">
                            <Button className="round-btn" style={{ backgroundColor: "white" }} >
                                <img src={twitter} width="28" hei alt="twitter-btn" />
                            </Button>
                            <Button className="round-btn" style={{ backgroundColor: "white" }} >
                                <img src={fb} width="28" alt="fb-btn" />
                            </Button>
                            <Button className="round-btn" style={{ backgroundColor: "white" }} >
                                <img src={skype} width="28" alt="skype-btn" />
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={6} md={4}>
                            <h3 className="white-text">
                                <p>
                                    ¿Tienes preguntas?
                                </p>
                                <p className="orange-text" style={{ fontSize: "14pt" }}>
                                    +61 (0) 383 766 284
                                </p>
                            </h3>
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                            <p className="orange-text">Horarios</p>
                            <p className="white-text">
                                Lunes - Viernes
                                06:00 AM - 10:00 PM
                            </p>
                            <p className="white-text">
                                Sábado - Domingo
                                08:00 AM - 08:00 PM
                            </p>
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                            <p className="orange-text">Dirección</p>
                            <p className="white-text">
                                Calle Oriente 241 A,
                                No. 200, Col. Agrícola Oriental,
                                Iztacalco, CDMX
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </div>

    )
}

export default Home;