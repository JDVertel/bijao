<script>
import vitrina from "./../components/vitrina/vitrina.vue";
export default {
    components: {
        vitrina,
    },

    methods: {

        diahoy() {
            const fecha = new Date();
            const diaActual = fecha.getDate();
            const mesActual = fecha.getMonth() + 1; // Los meses se indexan desde 0, por lo que se suma 1
            const añoActual = fecha.getFullYear();
            this.fechaActual = diaActual + '/' + mesActual + '/' + añoActual;
            /*  // console.log(diaActual + '/' + mesActual + '/' + añoActual); */
/*             // console.log(this.fechaActual); */
        }
    },
 

  created() {
    
        this.diahoy()
    },
  };

</script>

<template>
<div class="apk">
    <br>

  

    <div class="container">
        <div class="row">
            <div class="col-12 col-md-6 central">
                <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="@/components/images/slide1.png" class="d-block w-100 carrusel" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="@/components/images/slide2.png" class="d-block w-100 carrusel" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="@/components/images/slide3.png" class="d-block w-100 carrusel" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="@/components/images/slide4.png" class="d-block w-100 carrusel" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="@/components/images/slide5.png" class="d-block w-100 carrusel" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="@/components/images/slide6.png" class="d-block w-100 carrusel" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="@/components/images/slide7.png" class="d-block w-100 carrusel" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>

                <br />
            </div>
            <div class="col-12 col-md-6 centrado">
                <div class="card-body info">
                    <h6 class="display-6">Fundación Bijao</h6>
                    <p class="card-text-local">
                        Promociona la gastronomía ancestral y la cultura regional y
                        local impulsando desarrollando el FESTIVAL GASTRONOMICO Y
                        CULTURAL DEL TAMAL DEL MAGDALENA MEDIO.
                    </p>
                    {{fechaActual }}
                </div>
            </div>
        </div>
    </div>
    <br>
    <div class="card text-center transparente">
        <!--  -->
        <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Fundacion Bijao
                    </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <h6>Quienes Somos?</h6>
                        <p>
                            Somos un grupo de habitantes amigos del Barrio La Isla del
                            Zapato, perteneciente a la comuna 1 de Barrancabermeja, que ante
                            la preocupación por las difíciles condiciones que atraviesan
                            algunas de nuestras mujeres cabeza de hogar del barrio,
                            decidimos organizarlas y reorientarlas en la preparación de
                            alimentos ancestrales como el tamal y afines, como medio para su
                            manutención y sostenimiento del núcleo familiar.
                        </p>
                        <br />
                        <p>
                            La FUNDACIÓN BIJAO, es una persona jurídica de derecho privado,
                            de las reguladas, en lo pertinente, por los artículos 633 a 652
                            del Código Civil Colombiano, el decreto 2150 de 1995 y demás
                            normas concordantes. Se constituye como una entidad sin ánimo de
                            lucro, de carácter permanente, independiente y autónomo y de
                            utilidad común.
                        </p>
                        <hr />
                        <h6>Nuestro Equipo</h6>
                        <p>
                            Mujeres y hombres cabeza de hogar que desarrollan sus
                            actividades alrededor de la gastronomía ancestral y la cultura
                            regional, donde logramos actividades de desarrollo humano,
                            social, cultural, laboral, familiar para cada uno de los
                            miembros.
                        </p>
                        <hr />
                        <h6>Objetivos</h6>
                        <p>
                            Este proyecto tiene como objeto principal promocionar la
                            gastronomía ancestral y la cultura regional impulsando y
                            desarrollando EL FESTIVAL GASTRONÓMICO Y CULTURAL DEL TAMAL DEL
                            MAGDALENA MEDIO, apoyando y difundiendo actividades de
                            desarrollo humano, social, cultural, laboral y familiar.
                        </p>
                        <br />
                        <p>
                            • Apoyar al Turismo que es el vehículo por excelencia para el
                            desarrollo sostenible de la región y el país, el bienestar
                            humano y la promoción de oportunidades para la participación
                            local directa; y la gastronomía representa un icono fundamental
                            para su desarrollo.
                        </p>
                        <p>
                            • Promover y realizar acciones y actividades encaminadas a la
                            formación, a fortalecer el conocimiento de la culinaria y la
                            cultura regional, específicamente el tamal, en cualquiera de sus
                            variedades; posicionándolo como uno de los productos más
                            importantes de la cultura colombiana y latinoamericana.
                        </p>
                        <hr />
                        <h6>Mision</h6>
                        <p>
                            Nuestra principal misión es promocionar la gastronomía y la
                            cultura regional y local impulsando y desarrollando EL FESTIVAL
                            GASTRONÓMICO Y CULTURAL DEL TAMAL DEL MAGDALENA MEDIO, apoyando
                            y difundiendo actividades de desarrollo humano, social,
                            cultural, laboral, familiar, para los miembros de la fundación,
                            madres cabezas de familia del barrio Isla del Zapato quienes
                            obtienen sus ingresos y los de sus familias con la producción,
                            comercialización y venta de tamales de diferentes variedades.
                            Madres categorizadas en estratos uno y dos y consideradas
                            vulnerables a múltiples situaciones socio-culturales.
                        </p>

                        <router-link to="/">Home</router-link>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        Vitrina
                    </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse show" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body carta">
                        <!-- aqui se requiere una consulta -->
                        <div class="container">
                            <!--  -->
                            <div class="container">
                                <vitrina />
                            </div>

                            <!--  -->
                            <hr />

                        </div>
                    </div>
                </div>
            </div>

        </div>

        <!--  -->
    </div>
</div>
</template>

<style scoped>
.carrusel {
    height: 300px;
}

.centrado {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
}

.apk {
    font-size: 0.9em;
    min-height: 100vh;
    width: 100%;
    padding-bottom: 1em;
}

.accordion-button {
    background-color: #84ad09 !important;
    padding: 5px !important;
    font-size: 0.7rem !important;
    color: aliceblue !important;
    text-shadow: 1px 1px 1px black;
}

div.accordion-body {
    background-color: #f3ffc1 !important;
    padding: 6px !important;
}

table {
    border-color: #84ad09 !important;
}

.galeria {
    background-color: #f3ffc1 !important;
    padding: 0px !important;
}

.info {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;

}
</style>

