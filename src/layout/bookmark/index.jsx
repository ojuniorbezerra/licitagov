import React, { Fragment,useState,useEffect,useCallback } from 'react';
import { Star } from 'react-feather';
import {Col,Form,FormGroup} from 'reactstrap'
import {MENUITEMS} from '../sidebar/menu'
import {Link} from 'react-router-dom'
import { Tooltip } from 'reactstrap';

const Bookmark = (props) => {
    // eslint-disable-next-line
    const [mainmenu, setMainMenu] = useState(MENUITEMS);
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState(false);
    const [bookmarkSearch, SetBookmarkSearch] = useState(false)
    const [bookmarkItems, setBookmarkItems] = useState([]);
    const [tooltipOpen, setTooltipOpen] = useState(false);
    // eslint-disable-next-line
    const [targetName, setTargetName] = useState('');

    const toggle = targetName => {
        setTooltipOpen()
        if (!targetName) {
            setTargetName({
                ...targetName,
                targetName: {
                    tooltipOpen: true
                }
            });
        } else {
            setTargetName({
                ...targetName,
                targetName: {
                    tooltipOpen: !targetName.tooltipOpen
                }
            });
        }
    };
    
    const escFunction = useCallback((event) => {
        if (event.keyCode === 27) {
            setSearchValue('')
            setSearchResult([])
            SetBookmarkSearch(false)
            document.querySelector(".filled-bookmark").classList.remove('is-open');
            document.querySelector(".page-wrapper").classList.remove("offcanvas-bookmark");
        }
    }, []);
    
    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);
        mainmenu.filter(menuItems => {
          if (menuItems.bookmark) {
              setBookmarkItems(bookmarkItems => [...bookmarkItems, menuItems])
          }
          return menuItems
          
        });
        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, [mainmenu,escFunction]);
    
      const handleSearchKeyword = (keyword) => {
    
        keyword ? addFix() : removeFix()
        const items = [];
        setSearchValue(keyword)
        mainmenu.filter(menuItems => {
            if (menuItems.title.toLowerCase().includes(keyword) && menuItems.type === 'link') {
                items.push(menuItems);
            }
            if (!menuItems.children) return false
            menuItems.children.filter(subItems => {
                if (subItems.title.toLowerCase().includes(keyword) && subItems.type === 'link') {
                    subItems.icon = menuItems.icon
                    items.push(subItems);
                }
                if (!subItems.children) return false
                subItems.children.filter(suSubItems => {
                    if (suSubItems.title.toLowerCase().includes(keyword)) {
                        suSubItems.icon = menuItems.icon
                        items.push(suSubItems);
                    }
                    return suSubItems
                })
                return subItems
            })
            checkSearchResultEmpty(items)
            setSearchResult(items);
            return menuItems
        });
    }
    
    const checkSearchResultEmpty = (items) => {
      if (!items.length) {
          document.querySelector(".empty-bookmark").classList.add('is-open');
    
      } else {
          document.querySelector(".empty-bookmark").classList.remove('is-open');
      }
    }
    
    const addFix = () => {
        document.querySelector(".filled-bookmark").classList.add('is-open');
    }
    
    const removeFix = () => {
        setSearchValue('')
        setSearchResult([])
        document.querySelector(".filled-bookmark").classList.remove('is-open');
    }
    
    const addToBookmark = (event, items) => {
      const index = bookmarkItems.indexOf(items);
      if (index === -1 && !items.bookmark) {
          items.bookmark = true;
          event.currentTarget.classList.add('starred');
          setBookmarkItems([...bookmarkItems, items])
      } else {
          event.currentTarget.classList.remove('starred');
          bookmarkItems.splice(index, 1);
          setBookmarkItems(bookmarkItems)
          items.bookmark = false;
      }
    }
    
    const removeOffcanvas = () => {
      if (bookmarkSearch) {
          setSearchValue('')
          setSearchResult([])
          document.querySelector(".filled-bookmark").classList.remove('is-open');
          document.querySelector(".page-wrapper").classList.remove("offcanvas-bookmark");
      }
      SetBookmarkSearch(!bookmarkSearch)
    }

    return (
        <Fragment>
            <Col xs="6">
                    <div className="bookmark pull-right">
                        <ul>
                            {
                            bookmarkItems.map((items, index) => {
                                return (
                                    <li key={index}>
                                        <Link to={`${items.path}`} className="realname">
                                            <items.icon id={`${items[index]}`} />
                                            <Tooltip placement="top" isOpen={tooltipOpen} target={`${items[index]}`} toggle={() => toggle(`${items[index]}`)}>
                                                {items.title}
                                            </Tooltip>
                                        </Link>
                                    </li>
                                )
                            })}
                            <li><a href="#javascript" onClick={removeOffcanvas}><Star className="bookmark-search"/></a>
                                <Form className="form-inline search-form">
                                <FormGroup className={`form-control-search ${bookmarkSearch ? 'open' : ''}`}>
                                    <input 
                                        type="text" 
                                        placeholder="Search.."
                                        value={searchValue}
                                        onChange={(e) => handleSearchKeyword(e.target.value)}
                                    />
                                    <div className="Typeahead-menu filled-bookmark custom-scrollbar" id="search-outer">
                                        {searchValue ?
                                            searchResult.map((data, index) => {
                                                return (
                                                    <div className="ProfileCard u-cf" key={index}>
                                                        <div className="ProfileCard-avatar">
                                                            <data.icon />
                                                        </div>
                                                        <div className="ProfileCard-details">
                                                            <div className="ProfileCard-realName">
                                                                  <Link 
                                                                      to={data.path} 
                                                                      className="realname" 
                                                                      onClick={removeFix}
                                                                  >
                                                                      {data.title}
                                                                  </Link>
                                                                  <span className="pull-right">
                                                                    <a href="#javascript">
                                                                        <i className="fa fa-star-o mt-1 icon-star" onClick={(e) => addToBookmark(e, data)}></i>
                                                                    </a>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                            : ''}
                                    </div>
                                    <div className="Typeahead-menu empty-bookmark">
                                        <div className="tt-dataset tt-dataset-0">
                                            <div className="EmptyMessage">
                                                Opps!! There are no result found.
                                            </div>
                                        </div>
                                    </div>
                                </FormGroup>
                                </Form>
                            </li>
                        </ul>
                    </div>
            </Col>
        </Fragment>
    );
}

export default Bookmark;