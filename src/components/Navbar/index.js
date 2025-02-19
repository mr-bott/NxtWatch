import {HiHome} from 'react-icons/hi'
import {AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import {Link} from 'react-router-dom'
import {Component} from 'react'

// import ContactUs from '../ContactUs'
import ActiveMenuContext from '../../Context/ActiveMenuContext'
import {DivContainer, ListContainer, ListItems, SpanEl} from './styledComponent'

import './index.css'

class Navbar extends Component {
  render() {
    return (
      <ActiveMenuContext.Consumer>
        {value => {
          const {activeMenu} = value
          const color = activeMenu === 'light' ? '#000000' : '#ffffff'
          const hoverBgColor = activeMenu === 'light' ? '#616e7c' : '#475569'

          return (
            <DivContainer>
              <ListContainer>
                <Link to="/">
                  <ListItems color={`${color}`} bgColor={`${hoverBgColor}`}>
                    <span className="nav-icons">
                      <HiHome size={20} />
                    </span>{' '}
                    <SpanEl>Home</SpanEl>
                  </ListItems>
                </Link>
                <Link to="/trending">
                  <ListItems color={`${color}`} bgColor={`${hoverBgColor}`}>
                    <span className="nav-icons">
                      <AiFillFire size={20} />
                    </span>{' '}
                    <SpanEl>Trending</SpanEl>
                  </ListItems>
                </Link>
                <Link to="/gaming">
                  <ListItems color={`${color}`} bgColor={`${hoverBgColor}`}>
                    <span className="nav-icons">
                      <SiYoutubegaming size={20} />
                    </span>{' '}
                    <SpanEl>Gaming</SpanEl>
                  </ListItems>
                </Link>
                <Link to="/saved-videos">
                  <ListItems color={`${color}`} bgColor={`${hoverBgColor}`}>
                    <span className="nav-icons">
                      <MdPlaylistAdd size={20} />
                    </span>
                    <SpanEl>Saved videos</SpanEl>
                  </ListItems>
                </Link>
              </ListContainer>
            </DivContainer>
          )
        }}
      </ActiveMenuContext.Consumer>
    )
  }
}

export default Navbar
