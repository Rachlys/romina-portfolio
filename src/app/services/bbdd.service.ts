import { Injectable } from '@angular/core';
import { Info } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class BbddService {

  sobre_mi : Array<Info> = [
    {
      dato : 'texto',
      titulo : 'SOBRE MI',
      descripcion : 'Me encanta aprender. Desde los principios de mi formación he sido una persona muy autodidacta e interesante por temas relacionados con lo "grafico". Eso me llevo a estudiar un grado de Bellas Artes y especializarme junto con un máster de Diseño Gráfico y Diseño Web. Después de realizar este máster, descubrí que el código, a pesar de lo que pueda aparentar, no era algo tedioso si no todo lo contrario, era un nuevo mundo realmente extenso el cual descubrir y desde entonces no he dejado de formarme en el del Desarrollo Web realizando diferentes másters y cursos. Aprender cada día es algo que me llena.',
    },

    {
      dato : 'logos_form',
      titulo : 'FORMACION',
      logos_info : [
        {
          i : 'fa-solid fa-palette',
          title_svg : 'GRADO EN BELLAS ARTES - URJC',
          descripcion: 'Realicé el Grado de Bellas Artes de la Universidad Rey Juan Carlos. Se estructuró en diferentes áreas: Dibujo, diseño y expresión gráfica junto con el área de pintura, escultura, arte y diseño digital y diseño audiovisual. Es un grado hibrido que conjunta perfectamente el ámbito tradicional con el ámbito moderno. Es una formación que se encargó en preparar a sus estudiantes en trabajar como un artista visual autónomo y autosuficiente en la práctica creativa así como la gestión entre grandes grupos de trabajo. También se preparó para ejercer de asesor de arte en la expresión visual y crítica de arte. Por otro lado,  se tuvo en cuenta la preparación de los alumnos para la gestión y desarrollo de diferentes proyectos artísticos ya sea de ámbitos de gran tamaño o de un tamaño más reducido. '
        },

        {
          i : 'fa-solid fa-pen-nib',
          title_svg : 'MÁSTER DISEÑO GRÁFICO - AULA CREACTIVA' ,
          descripcion: 'Realicé un Máster en Diseño Gráfico de la Escuela Aula Creactiva. Fueron estudios enfocados en la creación y presentación de todos los ámbitos relacionados con el diseño gráfico como el uso de las herramientas principales como el paquete Adobe, conocimientos de los conceptos importantes de la gestión de la imagen y de la difusión de mensajes a través de esta. También se tratan temas de pre-impresión para el control de la producción gráfica.'
        },

        {
          i : 'fa-solid fa-object-group',
          title_svg : 'MÁSTER DISEÑO WEB - AULA CREACTIVA',
          descripcion: 'Estudios enfocados en el aprendizaje en el diseño web y sus conceptos a través de diferentes herramientas como HTML5, CSS3, Wordpress y Bootstrap. También aprendizaje de otras herramientas necesarias para el alojamiento web como FileZilla.' 
        },

        {
          i : 'fa-solid fa-laptop-code',
          title_svg : 'MÁSTER WEB DEV FULL STACK - TRAZOS',
          descripcion: 'Realicé un Máster de Web Developer Full Stack por la Escuela de Trazos. Es un máster centrado en la enseñanza desde lo más principal como el lenguaje de marcado como HTML5 y CSS3 hasta diferentes lenguajes como Javascript, PHP y diferentes frameworks como Angular, React JS y nociones de Laravel. También obtuve formación en lenguajes relacionados con base de datos como PHP junto con MYSQL además de otras tecnologías como Node JS y mongoDB. Debido al uso de estas tecnologías se utilizaron otros programas relacionados como Postman, Visual Studio Code, Mamp, Github y Sourcetree. '
        },

        {
          i : 'fa-solid fa-file-lines',
          title_svg : 'OTROS CURSOS',
          descripcion: 'Actualmente estoy cursando diferentes cursos online para mejorar mi perfil de desarrolladora web. Uno de estos cursos es un curso online impartido por Samsung de Full Stack Developer, el cual me sirve para asentar y mejorar mis conocimientos sobre diferentes lenguajes. Otro curso que estoy realizando de manera online, es el curso de Diseño de Experiencia del Usuario (UX). Es un curso impartido por Google a través de Coursera el cual me nutre para mejorar la accesibilidad y tener más en cuenta la forma en la que los usuarios se relacionan con el diseño de las webs/apps. También, recientemente, he participado en Piscine Web Discovery Women’s Edition de 42 Fundación Telefónica.'
        },
      ]
    },

    {
      dato : 'imagen',
      titulo : 'ME.jpg',
    },

    {
      dato : 'logos',
      titulo : 'TECNOLOGIAS',
      logos_info : [

        {
          svg : '/assets/html_logo.svg',
          title_svg : 'HTML 5' 
        },

        {
          svg : '/assets/css_logo.svg',
          title_svg : 'CSS 3' 
        },

        {
          svg : '/assets/js_logo.svg',
          title_svg : 'JAVASCRIPT' 
        },

        {
          svg :'/assets/typescript_logo.svg',
          title_svg : 'TYPESCRIPT' 
        },

        {
          svg : '/assets/sass_logo.svg',
          title_svg : 'SASS' 
        },
        
        {
          svg : '/assets/angular_logo.svg',
          title_svg : 'ANGULAR' 
        },

        {
          svg : '/assets/php_logo.svg',
          title_svg : 'PHP' 
        },

        {
          svg : '/assets/react_logo.svg',
          title_svg : 'REACT JS' 
        },
      ]
    },

    {
      dato : 'logos',
      titulo : 'OTROS PROGRAMAS',
      logos_info : [
        {
          svg : '/assets/ps_logo.svg',
          title_svg : 'PHOTOSHOP' 
        },

        {
          svg : '/assets/ai_logo.svg',
          title_svg : 'ILLUSTRATOR' 
        },

        {
          svg : '/assets/after_Effects_logo.svg',
          title_svg : 'AFTER EFFECTS' 
        },



        {
          svg :'/assets/dreamweaver_loho.svg',
          title_svg : 'DREAWEAVER' 
        },

        {
          svg : '/assets/indesign_logo.svg',
          title_svg : 'INDESIGN' 
        },
        
        {

          svg : '/assets/premier.svg',
          title_svg : 'PREMIER' 
        },
      ]
    },


        {
          dato : 'lista',
          titulo : 'EXPERIENCIAS',
          logos_info : [
    
            {
              title_svg : 'DISEÑADORA GRÁFICA Y WEB - INVESTIGACIÓN Y ARTE', 
              descripcion: 'Desde marzo del 2022 hasta la actuaidad me encuentro realizando de manera esporádica diferentes proyectos relacionados con la creación de contenido multimedia'
            },
    
            {
              title_svg : 'DISEÑADORA GRÁFICA - TEKA SPAIN', 
              descripcion: 'Desde Mayo del 2021 hasta Marzo del 2022. Puesto enfocado en la realización de diversos proyectos gráficos tanto online como offline. Realización de proyectos para el punto de venta como folletos, tripticos, dipticos, stickers además del diseño/estudio de packagings para diferentes productos. Realización de contenido online en cuanto a recursos gráficos de diferentes formatos y características (edición/adaptación de videos, creación de fotomontajes, edición de fotografía) para web, además de realización de diferentes ads para la plataforma de Google Ads.'
            },
     
            {
              title_svg : 'EDICIÓN DE VÍDEO - INVESTIGACIÓN Y ARTE',
              descripcion: 'Desde Noviembre de 2019 - Marzo del 2020. Encargada de la gestión y creación de contenido web para una empresa dedicada a la tasación de obras artísticas. Remodelación web a través de Wordpress y gestión de contenido mediante FileZilla. Creación de contenido gráfico para RRSS y proyectos varios.'
            }
      ] 
    }


  ]

  proyectos : Array<any> = [
    {
      dato : 'lista',
      titulo : 'PROYECTOS GRAFICOS',
      logos_info :  [
        {
          title_svg : 'BRANDING NATUMY',
          imagen: '/assets/natumy_proyecto.jpg',

        },

        {
          title_svg : 'PACKAGING NOMEN  ' ,
          imagen : '/assets/nomen_proyecto.jpg'
        },

        {
          title_svg : 'EDITORIAL DESIGN BURN MAGAZINE',
          imagen : '/assets/burn_proyecto.jpg'

        },

        {
          title_svg : 'REDESIGN VINYL "LA HABITACIÓN ROJA"',
          imagen : '/assets/habitacion_proyecto.jpg'

        },

        {
          title_svg : 'REDESIGN CD "NOTHING BUT THIEVES"',
          imagen : '/assets/nothing_proyect.jpg'

        },
        {
          title_svg : 'REDESIGN WEB INVESTIGACIÓN Y ARTE',
          imagen : '/assets/web_proyecto.jpg'

        },
        {
          title_svg : 'TRIPTICO TEKA',
          imagen : '/assets/teka_proyecto.jpg'
        },
        {
          title_svg : 'PACKAGING TEKA',
          imagen : '/assets/packaging_proyecto.jpg'
        },
      ]
    },
    {
      dato : 'logos_web',
      titulo : 'PROYECTOS WEB',
      logos_info : [
        {
          i : 'fa-solid fa-list',
          title_svg : 'TODO LIST',
          href: 'url1'
        },
        {
          i : 'fa-solid fa-square-rss',
          title_svg : 'BLOG' ,
          href: 'url2'
        },
        {
          i : 'fa-solid fa-shapes',
          title_svg : 'TRIAGE COPYCAT',
          href: 'url2' 
        }
      ]
    },
    {
      dato : 'logos_port',
      titulo : 'REDES DESARROLLO',
      logos_info : [
        {
          i : 'fa-brands fa-behance',
          title_svg : 'BEHANCE',
          href: 'https://www.behance.net/rominayupanqu'
        },
        {
          i : 'fa-brands fa-square-github',
          title_svg : 'GITHUB' ,
          href: 'https://github.com/rachlys'
        }
      ]
    },

  
  ]

  contact_me : Array<any> = [
    {
      dato : 'texto',
      titulo : 'DISPONIBILIDAD',
      descripcion : 'Actualmente me encuentro buscando trabajo ya sea teletrabajo o presencial en la zona de Madrid, España. También estoy aceptando trabajos freelance. Si alguna de estas opciones encajan con tu propuesta, sientete libre en contactar conmigo!',
    },
    {
      dato : 'lista',
      titulo : 'CURRICULUM VITAE',
      logos_info :  [
        {
          title_svg : 'CURRICULUM VITAE',
          
          href : '/assets/CV_ROMINA_YUPANQUI_REYNOSO_2021.pdf'
        },
      ]
    },
    {
      dato : 'logos_web',
      titulo : 'LINKEDIN',
      logos_info : [
        {
          i : 'fa-brands fa-linkedin',
          href: 'https://www.linkedin.com/in/romina-yupanqui-reynoso/'
        }
      ]
    },
    {      
      dato : 'logos_web',
      titulo : 'EMAIL',
      logos_info : [
        {
          i : 'fa-solid fa-envelope',
          href: 'romiyup@hotmail.com'
        }
      ]
    },
  ]

  constructor() { }
}
