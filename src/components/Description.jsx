import React from 'react'
import {motion} from 'framer-motion'
import '../App.css'

const Description = () => {
  return (
    <div>
          
        <motion.div id='div1'
        initial={{
          x:-1000,
          opacity: 0
        }}
        animate={{
          x:0,
          opacity: 1
        }}
        transition={{
          delay:1,
          duration:2
        }}
        >
          Лучший подарок – это книга</motion.div>
          <div>
          <p>За долгие годы написаны тысячи и даже миллионы книг, на любой
             вкус: захватывающие и не очень, научные труды и рассуждения
             наркоманов, книги с вопросами и книги с ответами, поэзия и
             проза, культура и дикость. Каждая книга – это целый мир, точнее
             то, как автор видит и воспринимает мир, окружающий его.  
             Если вам с автором по пути, то вы, непременно, найдёте его
             творчество приятным, если его творчество вас раздражает, 
             возможно, это открываются глаза.

            Не так давно в народе говорили, что книга – лучший подарок. 
            Звучит похоже на правду. Ведь, приобретая книгу для другого 
            человека, вы даруете ему шанс обрести новые знания, погрузиться 
            в новый удивительный мир, а может просто пресс для закваски 
            капусты. Вот и возникает вопрос: как быть, если вкус дарителя не
            совпадает со вкусом получателя? Выбирайте книги вместе. А если 
            хочется сделать сюрприз, то приобретите сертификат на покупку 
            книг, сейчас это стало очень удобно сделать.</p></div>

          

          <motion.div id='div5'
          initial={{
            opacity:0,
          }}
          animate={{
            y:0,
            opacity:1
          }}
          transition={{
            delay:1,
            duration:2
          }}>
            <motion.img
            src='img/img5.jpg'
            className='banner'
            width={850}

            initial={{
              opacity:0.6
            }}
            transition={{
              duration:5
            }}
            whileTap={{rotate:360}}/>
          </motion.div>

        
          <div id='divImg'>
          <motion.div id='div3'
          initial={{
            opacity:0,
            scale:0.5
          }}
          animate={{
            scale:1,
            opacity:1
          }}
          transition={{
            duration:2
          }}>
            <motion.img
            src='img/ball.png'
            className='ball'
            width={200}

            initial={{
              opacity:0.6
            }}

            transition={{
              duration:5
            }}

            whileHover={{
              scale:1.5,
              transition:{
                duration:2
              }
            }}/>
          </motion.div>

          <motion.div id='div4'
          initial={{
            opacity:0,
            scale:0.5
          }}
          animate={{
            scale:1,
            opacity:1
          }}
          transition={{
            duration:2
          }}>

<motion.button className='btn btn-primary'
            whileHover={{
              scale:1.2
            }}>
            Нажми</motion.button>

            <motion.img drag='x'
            src='img/ball.png'
            className='ball'
            width={200}

            initial={{
              opacity:0.6
            }}

            transition={{
              duration:5
            }}

            whileDrag={{
              scale:1.5,
             
            }}/>
          </motion.div>

          
            </div>

    </div>
  )
}

export default Description