import React, { useState } from 'react'
import axios from 'axios'
import images from '../Images/logo.jpg'
import apple_mail from '../Images/apple_mail.jpg'
import discord from '../Images/discord.jpg'
import down from "../Images/down.jpg"
import facebook from "../Images/facebook.jpg"
import gmail from '../Images/gmail.jpg'
import google_docs from '../Images/google_docs.jpg'
import linkedin from '../Images/linkedin.jpg'
import microsoft_word from '../Images/microsoft_word.jpg'
import notion from '../Images/notion.jpg'
import outlook from '../Images/outlook.jpg'
import salesforce from '../Images/salesforce.jpg'
import slack from '../Images/slack.jpg'
import twitter from '../Images/twitter.jpg'
import Datashow from './datadisplay'

const Homepage = () => {
const [input, setinput] = useState("")
const [data,setData] = useState([]);
const Suggestions =()=>{
    if(data.length!==0){return <>
        <section id="Features">
        <div className='h1' style={{"marginTop":'-80px',"marginBottom":'30px'}}>Our Suggestions</div>
        <div className="row">
        {data.map(element=>{
            return <div className='box2'>
                     <div style={{'display':'flex'}}><div style={{"fontWeight":'600','marginRight':'5px'}}>Sentence : </div>{element.sentence}</div>
                     <div style={{'display':'flex'}}><div style={{'fontWeight':'600','marginRight':'5px'}}>Context : </div>{element.context.text}</div>
                     <div style={{'display':'flex'}}><div style={{"fontWeight":'600','marginRight':'5px'}}>Message : </div>{element.message}</div>
                     <div style={{'display':'flex'}}><div style={{"fontWeight":'600','marginRight':'5px'}}>Replacements : </div>{element.replacements.map(element=>{return <>
                                    {element.value} ,
                                    </>})}</div>
                     <div style={{'display':'flex'}}><div style={{'fontWeight':'600','marginRight':'5px'}}>A Detailed Desciption about Error : </div>{element.rule.description}</div>
                     <div style={{'display':'flex'}}><div style={{'fontWeight':'600','marginRight':'5px'}}>Character Placed : </div>{element.context.offset}</div>
            </div>
        })}
        </div>
        </section>
    </>}}

function check(){
axios.post('http://localhost:5000/getdata',{
    "text":input
}).then(response=>setData(response.data.matches))
}
  return (
    <div>
      <section id="Navbar">
      <nav className="navbar light">
        <div className="container-fluid">
          <a className="navbar-brand"><img alt='images' src={images} /></a>
          <a className="login ms-auto" href="#">Login</a>
        </div>
      </nav>
    </section>

    <section id="Title">
      <div className="row">
        <div className="col-lg-6">
          <h1 className="main-heading">Great Writing,<br />Simplified</h1>
          <p className="title-head">
            Compose bold, clear, mistake-free writing with coRRectly’s new
            AI-powered desktop Windows app.
          </p>
          <button type="button" className="btn btn-success title-button">
            <strong>Get coRRectly </strong>Its free
          </button>
        </div>

        <div className="col-lg-6">
           <textarea id='box1'
           value={input}
           onChange={(e)=>{setinput(e.target.value)}}
           />
          <button onClick={()=>{check()}} className="btn btn-success title-button"><strong>Correct It</strong></button>
        </div>
      </div>
    </section>    
    <Suggestions/>
    <section id="Features">
      <div className="row">
        <h1>Works Where You Do</h1>
        <p className="features-text">
          Get suggestions from coRRectly while you write in desktop applications
          and sites across the web—as you move between apps, social media,
          documents, messages, and emails.
        </p>
        <div className="col-lg-4 app-list">
          <h4>Emails and Messages</h4>
          <br /><br />
          <div className="row">
            <div className="col-lg-6">
              <img alt='images' src={gmail} />
              <p>GMAIL</p>
            </div>
            <div className="col-lg-6">
              <img alt='images' src={outlook} />
              <p>OUTLOOK</p>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-lg-6">
              <img alt='images' src={apple_mail} />
              <p>APPLE MAIL</p>
            </div>
            <div className="col-lg-6">
              <img alt='images' src={slack} />
              <p>SLACK</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 app-list">
          <h4>Documents and Projects</h4>
          <br /><br />
          <div className="row">
            <div className="col-lg-6">
              <img alt='images' src={google_docs} />
              <p>GOOGLE DOCS</p>
            </div>
            <div className="col-lg-6">
              <img alt='images' src={microsoft_word} />
              <p>MICROSOFT WORD</p>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-lg-6">
              <img alt='images' src={salesforce} />
              <p>SALESFORCE</p>
            </div>
            <div className="col-lg-6">
              <img alt='images' src={notion} />
              <p>NOTION</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 app-list">
          <h4>Social Media</h4>
          <br /><br />
          <div className="row">
            <div className="col-lg-6">
              <img alt='images' src={linkedin} />
              <p>LINKEDIN</p>
            </div>
            <div className="col-lg-6">
              <img alt='images' src={facebook} />
              <p>FACEBOOK</p>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-lg-6">
              <img alt='images' src={twitter} />
              <p>TWITTER</p>
            </div>
            <div className="col-lg-6">
              <img alt='images' src={discord} />
              <p>DISCORD</p>
            </div>
          </div>
        </div>
      </div>

      <div className="fexbox">
        <div className="q">
          <div className="card">
            <img alt='images' src={down} />
            <div className="con-text">
              <h2>París</h2>
              <p>
                Paris, the capital of France, is a major European city and a
                world center for gastronomy and culture. Its 19th century urban
                landscape is intersected by wide boulevards and the River Seine.
              </p>
            </div>
          </div>
        </div>

        <div className="q1">
          <h2 style={{"textAlign":"left"}}>Beyond Grammar <br />and Spelling</h2>
          <p  style={{"textAlign":"left"}} className="features-text">
            From grammar and spelling to style and tone, coRRectly’s suggestions
            are comprehensive, helping you communicate effectively and as you
            intend.
          </p>
        </div>
      </div>
    </section>
    <section id="Signup">
      <h1>Brilliant Writing Awaits</h1>
      <p className="title-head">
        Get started for free and find out what you can accomplish with the power
        of Grammarly at your fingertips.
      </p>
      <button type="button" className="btn btn-success title-button">
        <strong>Get coRRectly </strong>Its free
      </button>
    </section>

    </div>
  )
}

export default Homepage