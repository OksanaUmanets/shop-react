import React from 'react'

const Footer = () => {
  return (
    <div className='container'>
      <footer className='row row-col-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top'>
        <div className='col mb-3'>
          <a className=''>
            <img src='img/logo1.png' className='bi me-2' width={180} height={180}>
            </img>
          </a>
          <p>
            Книги - надежный друг
          </p>
        </div>
        <div className='col mb-3'>

        </div>
        <div className='col mb-4'>
          <h5>Мы в соцсетях:</h5>
          <ul className='nav flex-column'>
            <li className='nav-item mb-3'>
              <a className='nav-link p-0 text-muted'> Telegram</a>
            </li>
            <li className='nav-item mb-3'>
              <a className='nav-link p-0 text-muted'>YouTube</a>
            </li>
          </ul>
        </div>

        <div className='col mb-4'>
          <h5>Наши магазины:</h5>
          <ul className='nav flex-column'>
            <li className='nav-item mb-3'>
              <a className='nav-link p-0 text-muted'>г. Иркутск, ул. Советская, д.23</a>
            </li>
            <li className='nav-item mb-3'>
              <a className='nav-link p-0 text-muted'>г. Красноярск, ул. Ленина, д. 54</a>
            </li>
          </ul>
        </div>

      </footer>
    </div>
  )
}

export default Footer