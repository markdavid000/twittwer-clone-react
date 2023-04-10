import React from 'react';
import './main.css';
import './query.css';
import Amarachi from '../img/amarachi.jpg';
import Casweeney from '../img/Casweeney.jpg';
import MarkDavid from '../img/Mark-david.jpg';
import Feather from '../img/feather.png';

const Body = () => {
  return (
    <body style={{ backgroundColor: '#000' }} id='body'>
      <div className='container'>
        <div className='body_flex'>
          <header>
            <div className='side_bar'>
              <a
                href='#!'
                className='twitter_logo'
                style={{ color: '#D6D9DB' }}
              >
                <i className='ri-twitter-fill'></i>
              </a>
              <div className='side_bar_content'>
                <a href='#!' className='side_bar_link active'>
                  <i className='ri-home-7-fill'></i>
                  <span>Home</span>
                </a>
                <a href='#!' className='side_bar_link'>
                  <i className='ri-hashtag hahstag'></i>
                  <i className='ri-search-line none_search'></i>
                  <span>Explore</span>
                </a>
                <a href='#!' className='side_bar_link'>
                  <i className='ri-notification-2-line'></i>
                  <span>Notifications</span>
                </a>
                <a href='#!' className='side_bar_link'>
                  <i className='ri-mail-line'></i>
                  <span>Messages</span>
                </a>
                <a href='#!' className='side_bar_link'>
                  <i className='ri-bookmark-line'></i>
                  <span>Bookmarks</span>
                </a>
                <a href='#!' className='side_bar_link'>
                  <i className='ri-file-list-line'></i>
                  <span>Lists</span>
                </a>
                <a href='#!' className='side_bar_link'>
                  <i className='ri-user-fill'></i>
                  <span>Profile</span>
                </a>
                <a href='#!' className='side_bar_link'>
                  <i className='ri-more-line'></i>
                  <span>More</span>
                </a>
                <span style={{ display: 'block' }}>
                  <a href='#!' className='none'>
                    <img src={Feather} alt='' width='80' />
                  </a>
                  <a href='#!' className='tweet_btn'>
                    Tweet
                  </a>
                </span>
              </div>

              <a href='#!' className='profile_link'>
                <img src={MarkDavid} alt='' width='40' />
                <span>
                  Mark-david | ojuk... <br />{' '}
                  <span style={{ color: '#71767B', fontWeight: '400' }}>
                    @mark_ojukwu
                  </span>
                </span>
                <span>
                  <i className='ri-more-line'></i>
                </span>
              </a>
            </div>
          </header>
          <div className='post_body'>
            <div className='post_body_heading'>
              <a
                href='#!'
                className='twitter_logo_'
                style={{ color: '#1d7ff0', display: 'none' }}
              >
                <i className='ri-twitter-fill'></i>
              </a>
              <a href='#!' className='nav_btn'>
                <div>
                  <img
                    src={MarkDavid}
                    alt=''
                    width='35'
                    style={{ borderRadius: '50px' }}
                  />
                </div>
              </a>

              <a href='#!' className='post_body_heading_link'>
                <h3>Home</h3>
                <div>
                  <button style={{ textAlign: 'center' }} className='active'>
                    For you
                  </button>
                  <button style={{ textAlign: 'center' }}>Following</button>
                </div>
              </a>
            </div>
            <div className='pb'>
              <div className='user_tweet'>
                <a href='#!' className='tweet_user_img'>
                  <img
                    src={MarkDavid}
                    alt=''
                    width='50'
                    style={{ borderRadius: '50px' }}
                  />
                </a>
                <div className='flex__'>
                  <a
                    href='#!'
                    style={{ display: 'flex', alignItems: 'center' }}
                    className='audience'
                  >
                    Everyone{' '}
                    <span>
                      <i className='ri-arrow-down-s-line'></i>
                    </span>
                  </a>
                  <form>
                    <div
                      className='form-group'
                      style={{ marginBottom: '0 !important' }}
                    >
                      <textarea
                        className='form-control'
                        id='exampleFormControlTextarea1'
                        rows='3'
                        placeholder="What's happening?"
                      ></textarea>
                    </div>
                  </form>
                  <a
                    href='#!'
                    className='audience__'
                    style={{ display: 'flex', alignItems: 'center' }}
                  >
                    <span>
                      <i className='ri-earth-fill'></i>
                    </span>
                    Everyone can reply
                  </a>
                  <div className='border__'></div>
                  <div
                    className='cs'
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div style={{ display: 'flex' }}>
                      <a href='#!' className='hl'>
                        <i className='ri-image-2-line'></i>
                      </a>
                      <a href='#!' className='hl'>
                        <i className='ri-file-gif-line'></i>
                      </a>
                      <a href='#!' className='hl hl__'>
                        <i className='ri-list-check-2'></i>
                      </a>
                      <a href='#!' className='hl'>
                        <i className='ri-emotion-happy-line'></i>
                      </a>
                      <a href='#!' className='hl hl__'>
                        <i className='ri-calendar-2-line'></i>
                      </a>
                      <a href='#!' className='hl'>
                        <i className='ri-map-pin-line'></i>
                      </a>
                    </div>
                    <button
                      style={{
                        background: 'none',
                        border: 'none',
                        marginRight: '1rem',
                      }}
                    >
                      <p
                        style={{
                          background: '#1d7ff0dc',
                          color: '#e7e9ea',
                          fontSize: '.9rem',
                          padding: '.4rem 1rem',
                          fontWeight: '700',
                          borderRadius: '30px',
                          cursor: 'pointer',
                        }}
                      >
                        Tweet
                      </p>
                    </button>
                  </div>
                </div>
              </div>
              <div className='body_user_post'>
                <a href='#!' className='tweet_num'>
                  <p>Show 309 Tweets</p>
                </a>
                <a href='#!' className='user_post'>
                  <div className='post_user_img'>
                    <img
                      src='https://pbs.twimg.com/profile_images/1626995638398320640/gZTPqTH1_400x400.jpg'
                      alt=''
                      width='50'
                      style={{ borderRadius: '50px' }}
                    />
                  </div>
                  <div className='flex_'>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div>
                        <button className='upn upn_'>Seventeen</button>
                        <button className='upn'>@barrakuda_dev</button>
                        <span className='upn'>&CenterDot;</span>
                        <button className='upn upn__'> 1h</button>
                      </div>

                      <button
                        style={{
                          background: 'none',
                          color: '#e7e9ea',
                          border: 'none',
                          fontSize: '1.2rem',
                          paddingTop: '.2rem',
                          paddingRight: '.5rem',
                        }}
                      >
                        <i className='ri-more-line i__'></i>
                      </button>
                    </div>

                    <p>Go tell all your friends I love them too</p>

                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        paddingRight: '2rem',
                      }}
                      className='hll_cover'
                    >
                      <button className='hll'>
                        <i className='ri-chat-1-line'></i>
                      </button>
                      <button className='hll hll_retweet'>
                        <i className='ri-repeat-line'></i>
                        <span>5</span>
                      </button>
                      <button className='hll hll_love'>
                        <i className='ri-heart-3-line'></i>
                        <span>5</span>
                      </button>
                      <button className='hll'>
                        <i className='ri-bar-chart-line'></i>
                        <span>32</span>
                      </button>
                      <button className='hll'>
                        <i className='ri-upload-2-line'></i>
                        <span></span>
                      </button>
                    </div>
                  </div>
                </a>
                <a href='#!' className='user_post'>
                  <div className='post_user_img'>
                    <img
                      src='https://pbs.twimg.com/profile_images/1553455801435656195/yUrlOWuZ_400x400.jpg'
                      alt=''
                      width='50'
                      style={{ borderRadius: '50px' }}
                    />
                  </div>
                  <div className='flex_'>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div>
                        <button className='upn upn_'>Web3bridge Afrca</button>
                        <button className='upn'>@Web3bridge</button>
                        <span className='upn'>&CenterDot;</span>
                        <button className='upn upn__'> 22h</button>
                      </div>

                      <button
                        style={{
                          background: 'none',
                          color: '#e7e9ea',
                          border: 'none',
                          fontSize: '1.2rem',
                          paddingTop: '.2rem',
                          paddingRight: '.5rem',
                        }}
                      >
                        <i className='ri-more-line i__'></i>
                      </button>
                    </div>

                    <p>
                      We recognize the amazing work you put into marketing the
                      community responsive and serving its purpose. Thanks for
                      your contributions. Happy community Moderator’s Day from
                      all of us at Web3Bridge.
                    </p>

                    <img
                      src='https://pbs.twimg.com/media/FnLN6azWAAYPJLG?format=jpg&name=small'
                      alt=''
                      style={{ width: '100%', borderRadius: '20px' }}
                    />

                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        paddingRight: '2rem',
                      }}
                      className='hll_cover'
                    >
                      <button className='hll'>
                        <i className='ri-chat-1-line'></i>
                        <span></span>
                      </button>
                      <button className='hll hll_retweet'>
                        <i className='ri-repeat-line'></i>
                        <span>2</span>
                      </button>
                      <button className='hll hll_love'>
                        <i className='ri-heart-3-line'></i>
                        <span>25</span>
                      </button>
                      <button className='hll'>
                        <i className='ri-bar-chart-line'></i>
                        <span>691</span>
                      </button>
                      <button className='hll'>
                        <i className='ri-upload-2-line'></i>
                        <span></span>
                      </button>
                    </div>
                  </div>
                </a>
                <a href='#!' className='user_post'>
                  <div className='post_user_img'>
                    <img
                      src={MarkDavid}
                      alt=''
                      width='50'
                      style={{ borderRadius: '50px' }}
                    />
                  </div>
                  <div className='flex_'>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div>
                        <button className='upn upn_'>
                          Mark-david | ojukwu.dev
                        </button>
                        <button className='upn'>@mark_ojukwu</button>
                        <span className='upn'>&CenterDot;</span>
                        <button className='upn upn__'> jan 21</button>
                      </div>

                      <button
                        style={{
                          background: 'none',
                          color: '#e7e9ea',
                          border: 'none',
                          fontSize: '1.2rem',
                          paddingTop: '.2rem',
                          paddingRight: '.5rem',
                        }}
                      >
                        <i className='ri-more-line i__'></i>
                      </button>
                    </div>

                    <p>
                      Hi, guys I built a weather report app that gives you the
                      weather condition per time of any location in the world.
                      And it was built with #html, #CSS, #bootstrap, and
                      #javascript. This is the link to the web app{' '}
                      <span style={{ color: '#1d7ff0' }}>
                        https://ojukwu-weather-report.netlify.app
                      </span>
                    </p>

                    <img
                      src='https://pbs.twimg.com/media/FnA6CmUWIAAAqUn?format=jpg&name=small'
                      alt=''
                      style={{ width: '100%', borderRadius: '20px' }}
                    />

                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        paddingRight: '2rem',
                      }}
                      className='hll_cover'
                    >
                      <button className='hll'>
                        <i className='ri-chat-1-line'></i>
                        <span>1</span>
                      </button>
                      <button className='hll hll_retweet'>
                        <i className='ri-repeat-line'></i>
                        <span>5</span>
                      </button>
                      <button className='hll hll_love'>
                        <i className='ri-heart-3-line'></i>
                        <span>6</span>
                      </button>
                      <button className='hll'>
                        <i className='ri-bar-chart-line'></i>
                        <span>341</span>
                      </button>
                      <button className='hll'>
                        <i className='ri-upload-2-line'></i>
                        <span></span>
                      </button>
                    </div>
                  </div>
                </a>

                <a href='#!' className='user_post'>
                  <div className='post_user_img'>
                    <img
                      src='https://pbs.twimg.com/profile_images/1534280478991302656/8j4QlZum_400x400.jpg'
                      alt=''
                      width='50'
                      style={{ borderRadius: '50px' }}
                    />
                  </div>
                  <div className='flex_'>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div>
                        <button className='upn upn_'>JavaScript Mastery</button>
                        <button className='upn'>@jsmasterypro</button>
                        <span className='upn'>&CenterDot;</span>
                        <button className='upn upn__'> 5h</button>
                      </div>

                      <button
                        style={{
                          background: 'none',
                          color: '#e7e9ea',
                          border: 'none',
                          fontSize: '1.2rem',
                          paddingTop: '.2rem',
                          paddingRight: '.5rem',
                        }}
                      >
                        <i className='ri-more-line i__'></i>
                      </button>
                    </div>

                    <p>Describe JavaScript in one word 😃</p>

                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        paddingRight: '2rem',
                      }}
                      className='hll_cover'
                    >
                      <button className='hll'>
                        <i className='ri-chat-1-line'></i>
                        <span>58</span>
                      </button>
                      <button className='hll hll_retweet'>
                        <i className='ri-repeat-line'></i>
                        <span>9</span>
                      </button>
                      <button className='hll hll_love'>
                        <i className='ri-heart-3-line'></i>
                        <span>121</span>
                      </button>
                      <button className='hll'>
                        <i className='ri-bar-chart-line'></i>
                        <span>11.2K</span>
                      </button>
                      <button className='hll'>
                        <i className='ri-upload-2-line'></i>
                        <span></span>
                      </button>
                    </div>
                  </div>
                </a>

                <a href='#!' className='user_post'>
                  <div className='post_user_img'>
                    <img
                      src={Amarachi}
                      alt=''
                      width='50'
                      style={{ borderRadius: '50px' }}
                    />
                  </div>
                  <div className='flex_'>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div>
                        <button className='upn upn_'>amarachiugwu.eth</button>
                        <button className='upn'>@amarachiugwu_</button>
                        <span className='upn'>&CenterDot;</span>
                        <button className='upn upn__'>Nov 8, 2022</button>
                      </div>

                      <button
                        style={{
                          background: 'none',
                          color: '#e7e9ea',
                          border: 'none',
                          fontSize: '1.2rem',
                          paddingTop: '.2rem',
                          paddingRight: '.5rem',
                        }}
                      >
                        <i className='ri-more-line i__'></i>
                      </button>
                    </div>

                    <p>
                      What we do after{' '}
                      <span style={{ color: '#1d7ff0' }}> @Web3Bridge</span>,
                      BUILD!!!!!!!!!!
                    </p>

                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2,1fr)',
                        gap: '.2rem',
                      }}
                    >
                      <img
                        src='https://pbs.twimg.com/media/FhDc2aJWAAACYj-?format=jpg&name=medium'
                        alt=''
                        style={{ width: '100%', borderTopLeftRadius: '20px' }}
                      />
                      <img
                        src='https://pbs.twimg.com/media/FhDc47VXgAE0E3B?format=jpg&name=360x360'
                        alt=''
                        style={{ width: '100%', borderTopRightRadius: '20px' }}
                      />
                      <img
                        src='https://pbs.twimg.com/media/FhDc6jWXgAATnwH?format=jpg&name=360x360'
                        alt=''
                        style={{
                          width: '100%',
                          borderBottomLeftRadius: '20px',
                        }}
                      />
                      <img
                        src='https://pbs.twimg.com/media/FhDc2aJWAAACYj-?format=jpg&name=medium'
                        alt=''
                        style={{
                          width: '100%',
                          borderBottomRightRadius: '20px',
                        }}
                      />
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        paddingRight: '2rem',
                      }}
                      className='hll_cover'
                    >
                      <button className='hll'>
                        <i className='ri-chat-1-line'></i>
                        <span></span>
                      </button>
                      <button className='hll hll_retweet'>
                        <i className='ri-repeat-line'></i>
                        <span></span>
                      </button>
                      <button className='hll hll_love'>
                        <i className='ri-heart-3-line'></i>
                        <span>30</span>
                      </button>
                      <button className='hll'>
                        <i className='ri-bar-chart-line'></i>
                        <span></span>
                      </button>
                      <button className='hll'>
                        <i className='ri-upload-2-line'></i>
                        <span></span>
                      </button>
                    </div>
                  </div>
                </a>

                <a href='#!' className='user_post'>
                  <div className='post_user_img'>
                    <img
                      src='https://pbs.twimg.com/profile_images/1523176436005097474/7Sn2iGr4_400x400.jpg'
                      alt=''
                      width='50'
                      style={{ borderRadius: '50px' }}
                    />
                  </div>
                  <div className='flex_'>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div>
                        <button className='upn upn_'>TheMadisonReyes</button>
                        <button className='upn'>@MadisonReyesHQ</button>
                        <span className='upn'>&CenterDot;</span>
                        <button className='upn upn__'> 37m</button>
                      </div>

                      <button
                        style={{
                          background: 'none',
                          color: '#e7e9ea',
                          border: 'none',
                          fontSize: '1.2rem',
                          paddingTop: '.2rem',
                          paddingRight: '.5rem',
                        }}
                      >
                        <i className='ri-more-line i__'></i>
                      </button>
                    </div>

                    <p>Also we are half way to 9k followers 🤔🤔</p>

                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        paddingRight: '2rem',
                      }}
                      className='hll_cover'
                    >
                      <button className='hll'>
                        <i className='ri-chat-1-line'></i>
                        <span>5</span>
                      </button>
                      <button className='hll hll_retweet'>
                        <i className='ri-repeat-line'></i>
                        <span>1</span>
                      </button>
                      <button className='hll hll_love'>
                        <i className='ri-heart-3-line'></i>
                        <span>54</span>
                      </button>
                      <button className='hll'>
                        <i className='ri-bar-chart-line'></i>
                        <span>738</span>
                      </button>
                      <button className='hll'>
                        <i className='ri-upload-2-line'></i>
                        <span></span>
                      </button>
                    </div>
                  </div>
                </a>

                <a href='#!' className='user_post'>
                  <div className='post_user_img'>
                    <img
                      src={Casweeney}
                      alt=''
                      width='50'
                      style={{ borderRadius: '50px' }}
                    />
                  </div>
                  <div className='flex_'>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div>
                        <button className='upn upn_'>
                          Casweeney | ojukwu.eth
                        </button>
                        <button className='upn'>@codingcas</button>
                        <span className='upn'>&CenterDot;</span>
                        <button className='upn upn__'>jan 21</button>
                      </div>

                      <button
                        style={{
                          background: 'none',
                          color: '#e7e9ea',
                          border: 'none',
                          fontSize: '1.2rem',
                          paddingTop: '.2rem',
                          paddingRight: '.5rem',
                        }}
                      >
                        <i className='ri-more-line i__'></i>
                      </button>
                    </div>

                    <p>
                      Day 2 -
                      <span style={{ color: '#1d7ff0' }}>
                        {' '}
                        @0xPolygon @0xPolygonDevs @PolygonAbuja
                      </span>{' '}
                      4 Saturdays of Solidity.
                      <br />
                      <br />
                      <span style={{ color: '#1d7ff0' }}>#SOS</span>
                    </p>

                    <img
                      src='https://pbs.twimg.com/media/FnBTlnuWIAA4Fl0?format=jpg&name=small'
                      alt=''
                      style={{ width: '100%', borderRadius: '20px' }}
                    />

                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        paddingRight: '2rem',
                      }}
                      className='hll_cover'
                    >
                      <button className='hll'>
                        <i className='ri-chat-1-line'></i>
                        <span></span>
                      </button>
                      <button className='hll hll_retweet'>
                        <i className='ri-repeat-line'></i>
                        <span>8</span>
                      </button>
                      <button className='hll hll_love'>
                        <i className='ri-heart-3-line'></i>
                        <span>38</span>
                      </button>
                      <button className='hll'>
                        <i className='ri-bar-chart-line'></i>
                        <span>749</span>
                      </button>
                      <button className='hll'>
                        <i className='ri-upload-2-line'></i>
                        <span></span>
                      </button>
                    </div>
                  </div>
                </a>
                <a href='#!' className='user_post'>
                  <div className='post_user_img'>
                    <img
                      src='https://pbs.twimg.com/media/Fj3YV7UXkAAsAfr?format=jpg&name=small'
                      alt=''
                      width='50'
                      style={{ borderRadius: '50px' }}
                    />
                  </div>
                  <div className='flex_'>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div>
                        <button className='upn upn_'>
                          Madubueze Gloria Ifeoma
                        </button>
                        <button className='upn'>@Techk_e4ma</button>
                        <span className='upn'>&CenterDot;</span>
                        <button className='upn upn__'>Dec 13, 2022</button>
                      </div>

                      <button
                        style={{
                          background: 'none',
                          color: '#e7e9ea',
                          border: 'none',
                          fontSize: '1.2rem',
                          paddingTop: '.2rem',
                          paddingRight: '.5rem',
                        }}
                      >
                        <i className='ri-more-line i__'></i>
                      </button>
                    </div>

                    <p>
                      <span style={{ color: '#1d7ff0' }}>#NewProfilePic</span>
                    </p>

                    <img
                      src='https://pbs.twimg.com/media/Fj3YV7UXkAAsAfr?format=jpg&name=small'
                      alt=''
                      style={{ width: '100%', borderRadius: '20px' }}
                    />

                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        paddingRight: '2rem',
                      }}
                      className='hll_cover'
                    >
                      <button className='hll'>
                        <i className='ri-chat-1-line'></i>
                        <span>11</span>
                      </button>
                      <button className='hll hll_retweet'>
                        <i className='ri-repeat-line'></i>
                        <span>4</span>
                      </button>
                      <button className='hll hll_love'>
                        <i className='ri-heart-3-line'></i>
                        <span>79</span>
                      </button>
                      <button className='hll'>
                        <i className='ri-bar-chart-line'></i>
                        <span></span>
                      </button>
                      <button className='hll'>
                        <i className='ri-upload-2-line'></i>
                        <span></span>
                      </button>
                    </div>
                  </div>
                </a>
                <div className='break'>
                  <br />
                  <br />
                  <br />
                </div>
              </div>
            </div>

            <a href='#!' className='tweet_nav'>
              <img
                src='img/t26_c6_a4_p2.png'
                alt=''
                width='120'
                style={{ textShadow: '0px 0px 9px rgba(116,116,116,0.58)' }}
              />
            </a>
          </div>
          <div className='fixed_menu'>
            <a href='#!' className='side_bar_link active'>
              <i className='ri-home-7-fill'></i>
            </a>
            <a href='#!' className='side_bar_link'>
              <i className='ri-search-line none_search'></i>
            </a>
            <a href='#!' className='side_bar_link'>
              <i className='ri-notification-2-line'></i>
            </a>
            <a href='#!' className='side_bar_link'>
              <i className='ri-mail-line'></i>
            </a>
          </div>
          <div className='right_bar'>
            <form className='search_bar'>
              <button
                style={{
                  background: 'none',
                  color: '#71767B',
                  border: 'none',
                  fontSize: '1.2rem',
                  paddingTop: '.2rem',
                }}
              >
                <i className='ri-search-line'></i>
              </button>
              <input
                type='text'
                className='search_input'
                placeholder='Search Twitter'
              />
            </form>
            <div className='trending'>
              <div className='trends'>
                <h2 className='trend_heading'>Trends for you</h2>
                <div>
                  <a href='#!' className='trend_link'>
                    <span>
                      <p>Entertainment &CenterDot; Trending</p>
                      <h4>Vibranium</h4>
                      <p>19.4K Tweets</p>
                    </span>
                    <button
                      style={{
                        background: 'none',
                        color: '#e7e9ea',
                        border: 'none',
                        fontSize: '1.2rem',
                        paddingTop: '.2rem',
                      }}
                    >
                      <i className='ri-more-line'></i>
                    </button>
                  </a>
                  <a href='#!' className='trend_link'>
                    <span>
                      <p>Careers &CenterDot; Trending</p>
                      <h4>ASUU</h4>
                      <p>9,082 Tweets</p>
                    </span>
                    <button
                      style={{
                        background: 'none',
                        color: '#e7e9ea',
                        border: 'none',
                        fontSize: '1.2rem',
                        paddingTop: '.2rem',
                      }}
                    >
                      <i className='ri-more-line'></i>
                    </button>
                  </a>
                  <a href='#!' className='trend_link'>
                    <span>
                      <p>Trending in Nigeria</p>
                      <h4>Tramadol</h4>
                      <p>7,066 Tweets</p>
                    </span>
                    <button
                      style={{
                        background: 'none',
                        color: '#e7e9ea',
                        border: 'none',
                        fontSize: '1.2rem',
                        paddingTop: '.2rem',
                      }}
                    >
                      <i className='ri-more-line'></i>
                    </button>
                  </a>
                  <a href='#!' className='trend_link'>
                    <span>
                      <p>Trending in Nigeria</p>
                      <h4>Apostle Suleman</h4>
                      <p>6,358 Tweets</p>
                    </span>
                    <button
                      style={{
                        background: 'none',
                        color: '#e7e9ea',
                        border: 'none',
                        fontSize: '1.2rem',
                        paddingTop: '.2rem',
                      }}
                    >
                      <i className='ri-more-line'></i>
                    </button>
                  </a>
                  <a href='#!' className='trend_link'>
                    <span>
                      <p>Trending in Nigeria</p>
                      <h4>ATMs</h4>
                      <p>3,150 Tweets</p>
                    </span>
                    <button
                      style={{
                        background: 'none',
                        color: '#e7e9ea',
                        border: 'none',
                        fontSize: '1.2rem',
                        paddingTop: '.2rem',
                      }}
                    >
                      <i className='ri-more-line'></i>
                    </button>
                  </a>
                  <a href='#!' className='trend_link'>
                    <span>
                      <p>Trending in Nigeria</p>
                      <h4>God is Good</h4>
                      <p>28.2K Tweets</p>
                    </span>
                    <button
                      style={{
                        background: 'none',
                        color: '#e7e9ea',
                        border: 'none',
                        fontSize: '1.2rem',
                        paddingTop: '.2rem',
                      }}
                    >
                      <i className='ri-more-line'></i>
                    </button>
                  </a>
                  <a href='#!' className='trend_link'>
                    <span>
                      <p>Music &CenterDot; Trending</p>
                      <h4>The G.O.A.T.</h4>
                      <p>3,664 Tweets</p>
                    </span>
                    <button
                      style={{
                        background: 'none',
                        color: '#e7e9ea',
                        border: 'none',
                        fontSize: '1.2rem',
                        paddingTop: '.2rem',
                      }}
                    >
                      <i className='ri-more-line'></i>
                    </button>
                  </a>
                  <a href='#!' className='trend_link'>
                    <span>
                      <p>Trending in Nigeria</p>
                      <h4>Dangote</h4>
                      <p>4,295 Tweets</p>
                    </span>
                    <button
                      style={{
                        background: 'none',
                        color: '#e7e9ea',
                        border: 'none',
                        fontSize: '1.2rem',
                        paddingTop: '.2rem',
                      }}
                    >
                      <i className='ri-more-line'></i>
                    </button>
                  </a>
                  <a href='#!' className='trend_link'>
                    <span>
                      <p>Music &CenterDot; Trending</p>
                      <h4>Asake</h4>
                      <p>3,985 Tweets</p>
                    </span>
                    <button
                      style={{
                        background: 'none',
                        color: '#e7e9ea',
                        border: 'none',
                        fontSize: '1.2rem',
                        paddingTop: '.2rem',
                      }}
                    >
                      <i className='ri-more-line'></i>
                    </button>
                  </a>
                  <a href='#!' className='trend_link'>
                    <span>
                      <p>Trending in Nigeria</p>
                      <h4>CBN Governor</h4>
                      <p>2,096 Tweets</p>
                    </span>
                    <button
                      style={{
                        background: 'none',
                        color: '#e7e9ea',
                        border: 'none',
                        fontSize: '1.2rem',
                        paddingTop: '.2rem',
                      }}
                    >
                      <i className='ri-more-line'></i>
                    </button>
                  </a>
                  <a href='#!' className='trend_link'>
                    <span>
                      <p>Trending in Nigeria</p>
                      <h4>Angels</h4>
                      <p>195K Tweets</p>
                    </span>
                    <button
                      style={{
                        background: 'none',
                        color: '#e7e9ea',
                        border: 'none',
                        fontSize: '1.2rem',
                        paddingTop: '.2rem',
                      }}
                    >
                      <i className='ri-more-line'></i>
                    </button>
                  </a>
                  <a
                    href='#!'
                    className='trend_link'
                    style={{ padding: '1.3rem' }}
                  >
                    <p
                      style={{ color: '#1d7ff0 !important', fontWeight: '600' }}
                    >
                      Show More
                    </p>
                  </a>
                </div>
              </div>
              <div className='follow'>
                <h2 className='follow_heading'>Who to follow</h2>
                <a href='#!' className='follow_link'>
                  <span className='img_name'>
                    <img
                      src={Casweeney}
                      alt=''
                      width='40'
                      style={{ borderRadius: '30px' }}
                    />
                    <span>
                      <h6>Casweeney | oju...</h6>
                      <p>@codingcas</p>
                    </span>
                  </span>
                  <button style={{ border: 'none', background: 'none' }}>
                    <p
                      style={{
                        background: '#e7e9ea',
                        color: '#000000',
                        fontSize: '.9rem',
                        padding: '.4rem 1rem',
                        fontWeight: '700',
                        borderRadius: '30px',
                        cursor: 'pointer',
                      }}
                    >
                      Follow
                    </p>
                  </button>
                </a>
                <a href='#!' className='follow_link'>
                  <span className='img_name'>
                    <img
                      src={Amarachi}
                      alt=''
                      width='40'
                      style={{ borderRadius: '30px' }}
                    />
                    <span>
                      <h6>amarachiugwu.eth</h6>
                      <p>@amarachiugwu_</p>
                    </span>
                  </span>
                  <button style={{ border: 'none', background: 'none' }}>
                    <p
                      style={{
                        background: '#e7e9ea',
                        color: '#000000',
                        fontSize: '.9rem',
                        padding: '.4rem 1rem',
                        fontWeight: '700',
                        borderRadius: '30px',
                        cursor: 'pointer',
                      }}
                    >
                      Follow
                    </p>
                  </button>
                </a>
                <a
                  href='#!'
                  className='trend_link'
                  style={{ padding: '1.3rem' }}
                >
                  <p style={{ color: '#1d7ff0 !important', fontWeight: '600' }}>
                    Show More
                  </p>
                </a>
              </div>
              <div className='footer_links'>
                <a href='#!' className='footer_link'>
                  Terms of Services
                </a>
                <a href='#!' className='footer_link'>
                  Privacy Policy
                </a>
                <a href='#!' className='footer_link'>
                  Cookie Policy
                </a>
                <a href='#!' className='footer_link'>
                  Accessibility
                </a>
                <a href='#!' className='footer_link'>
                  Ads info
                </a>
                <a href='#!' className='footer_link'>
                  More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Body;
