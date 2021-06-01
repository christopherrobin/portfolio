import React from "react";
import { Container, Row, Col } from "reactstrap";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import ResumeDownloadButton from "./ResumeDownloadButton";
import Button from "@material-ui/core/Button";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Fade from "./Fade";
import "./Resume.scss";

class Resume extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Fade
          childComponent={
            <Container style={{ paddingBottom: '3em'}}>
              <Row>
                <Col xs={12}>
                  <h1>Resume</h1>
                  <ResumeDownloadButton />
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <div id="quick-nav">
                    <div>Jump to:</div>
                    <AnchorLink href="#angi">Angi</AnchorLink>,&nbsp;
                    <AnchorLink href="#hhgregg">HH Gregg</AnchorLink>,&nbsp;
                    <AnchorLink href="#ww">Worm's Way Group</AnchorLink>,&nbsp;
                    <AnchorLink href="#hope">HOPE Foundation</AnchorLink>,&nbsp;
                    <AnchorLink href="#iufoundation">IU Foundation</AnchorLink>
                  </div>
                  <div className="banner-title">
                    <h2>Summary</h2>
                  </div>
                  <h3>Expert</h3>
                  <p>
                    JavaScript (ES6+), Node.js, React, Redux, Next.js, TypeScript,
                    HTML/CSS, Bootstrap, Material UI, jQuery (&#129326;)
                  </p>

                  <h3>Proficient</h3>
                  <p>GraphQL, Scala, Java EE, C# .NET, PHP, SQL/MySQL/NoSQL</p>

                  <h3>Summary</h3>
                  <ul>
                    <li>
                      HTML 5 / CSS 3 ( + Bootstrap, Material UI, Tailwind, SASS, LESS)
                    </li>
                    <li>
                      JavaScript (ECMAScript, Babel, Next.js, NodeJS, React,
                      Redux, Underscore/Lodash, Webpack, Angular)
                    </li>
                    <li>C# / C++ / ASP.NET</li>
                    <li>Java EE, JSTL, Scala</li>
                    <li>SQL / MySQL / NoSQL</li>
                    <li>
                      Automated Unit Testing (Mocha, Jest, Chai, Sinon, Selenium)
                    </li>
                    <li>WCAG 2.2 and ADA Compliance</li>
                    <li>UI / UX Development and Testing</li>
                    <li>Agile (Scrum) Software Development</li>
                  </ul>

                  <p>
                    + Github & SVN, Optimizely, Akamai, Segment, Google
                    Apps/AdSense/Analytics, Adobe Dynamic Tag Management, IBM
                    WebSphere Commerce, Confluence, JIRA, Cryptocurrency and
                    blockchain technology
                  </p>
                </Col>
              </Row>

              <div className="banner-title">
                <h2>Professional Experience</h2>
              </div>
              <div id="angi">
                <strong>Senior Software Engineer at Angi/Angie's List</strong>
              </div>
              <em>July 2015 – May 2021</em>
              <div>JavaScript (ES6+), Node.js, React, Redux, Next.js, TypeScript, Scala, Bootstrap, WCAG 2.2 and ADA Compliance</div>
              <ul>
                <li>
                  My primary role has been writing clean and reusable JavaScript
                  using the principles of functional programming, immutable
                  data, and unidirectional data flow that can scale to millions
                  of users.
                </li>
                <li>Responsible for creating, maintaining, and decommissioning a collection of distributed and loosely coupled apps. (Microservice architecture)</li>
                <li>Coordinating with product owners, UX designers, customer service representatives, and outside parties to create and implement business requirements.</li>
                <li>Responsible for creating and breaking down large project requests ("Epics" in Jira) into manageable stories, tasks, and sub-tasks so we can accurately groom, point, and deliver those projects on time.</li>
                <li>Led the massive front-end re-branding effort from Angie's List to Angi for the Service Provider vertical. (and parts of other verticals)</li>
                <li>I take professional growth seriously, I mentored many newcomers with minimal enterprise level JavaScript experience to be successful and confident front-end engineers. </li>
                <li>Participated as part of the transition team after the IAC acquisition and the following Home Advisor/Handy/Angie's List merger.</li>
                <li>
                  In 2016 I was part of the team that finished a multiple year initiative to drop the pay
                  wall, integrate a lead generation vertical, and migrate our
                  website to a completely new state of the art platform.
                </li>
              </ul>

              <div id="hhgregg">
                <strong>Front-End Developer at HH Gregg</strong>
              </div>
              <em>July 2012 – July 2015</em>
              <div>
                HTML, CSS, JSTL, Javascript (Dojo / jQuery), UI / UX, Akamai CDN,
                Adobe Tag Management, SQL, IBM WebSphere Commerce, DB2
              </div>
              <ul>
                <li>
                  Responsible for on-call support and front-end development for
                  hhgregg.com
                </li>
                <li>
                  Working with business, marketing, and outside parties to create
                  and implement business requirements, project plans, and
                  development timelines.
                </li>
                <li>
                  Configuration, implementation, development, and maintenance of
                  Akamai CDN.
                </li>
                <li>
                  Senior Front-End Developer for the 2015 redesign of hhgregg.com
                  which includes a movement to a responsive design.
                </li>
                <li>
                  The collection, measurement, analysis, and reporting of web data
                  for the purpose of optimizing web usage (emphasis on UI/UX, web
                  performance, and multi-variant testing)
                </li>
                <li>
                  Responsible for the removal of analytical tools such as
                  Omniture, Google Analytics, ClearSaleing, OpinionLab, and more.
                  I then re-implemented them via Adobe's Dynamic Tag Management
                  system.
                </li>
                <li>
                  We won the{" "}
                  <a
                    href="https://www.jdpower.com/business/press-releases/2014-appliance-shopper-website-evaluation-study"
                    target="blank"
                  >
                    award for "2014 Best Retail Website"
                  </a>{" "}
                  from J.D. Power and associates, beating out contenders like Best
                  Buy, Lowe's, Costco, Sears, and Home Depot
                </li>
                <li>
                  Estimated total e-commerce sales were $50 million in 2013, a 39%
                  increase compared to 2012
                </li>
                <li>
                  2015 Q3 Quarterly Earnings reports reveal a 60% increase in hh
                  gregg e-commerce sales despite a 5.9% decline in in-store sales
                </li>
              </ul>

              <div id="ww">
                <strong>Full Stack Developer at The Worm's Way Group</strong>
              </div>
              <em>August 2011 - July 2012</em>
              <div>
                HTML, CSS, JavaScript (and jQuery), ASP.NET (Visual
                Basic/C#/SQL/Razor), Graphic/UI Design (Photoshop, Illustrator),
                Statistical and Development Analysis
              </div>
              <ul>
                <li>
                  Worked extensively with database administrator, marketing teams,
                  and our back-end engineer to convert two Visual Basic websites
                  to C# .NET MVC in 7 month project.
                </li>
                <li>
                  Technical analysis, maintenence, and support for Google
                  Analytics and similar tagging/tracking software.
                </li>
                <li>
                  Implemented style and branding guide with marketing for
                  websites, promotions, and physical materials.
                </li>
                <li>
                  Responsible for WormsWay.com support and development as well as
                  the Wholesale Garden Supply business, BWGS.com
                </li>
              </ul>

              <div id="hope">
                <strong>
                  Web Developer and Marketing Associate at The HOPE Foundation
                </strong>
              </div>
              <em>May 2009 - August 2011</em>
              <div>
                PHP, MySQL, JavaScript (and jQuery), Graphic Design,
                mailing/emailing marketing promotions, marketing analysis, server
                and database administration
              </div>
              <ul>
                <li>
                  Responsible for all PHP, HTML, CSS, and JS development and
                  support for HOPEFoundation.org
                </li>
                <li>
                  Google Analytics and e-commerce statistical analysis with
                  emphasis on UI/UX
                </li>
                <li>
                  Created branding guide and website style guide, coordinated
                  applying all the new rules throughout all departments.
                </li>
                <li>
                  Creation of a completely custom (from scratch) user-based cloud
                  platform to serve teachers and field professionals all types of
                  media documents.
                </li>
                <li>
                  Responsible for creating online systems to handle streaming
                  video conferences, press events, and video workshops.
                </li>
                <li>
                  Created and oversaw the sending of HOPE's monthly newsletter to
                  hundreds of thousands of subscribers.
                </li>
              </ul>

              <div id="iufoundation">
                <strong>
                  Web Developer at The Indiana University Foundation
                </strong>
              </div>
              <em>October 2008 - May 2009</em>
              <div>HTML, CSS, JavaScript, Graphic Design</div>
              <ul>
                <li>
                  Created satellite website for the Bill Armstrong Golf Memorial
                  Classic
                </li>
                <li>
                  Spam-proofed all e-mail addresses and contact forms using
                  JavaScript
                </li>
                <li>
                  Converted old Visual Basic code to C# and tested/released the
                  changes
                </li>
              </ul>

              <div>
                <strong>
                  Web Developer and Graphic Designer at Ivy Tech (Bloomington, IN)
                </strong>
              </div>
              <em>January 2008 - May 2009</em>
              <div>HTML, CSS, PHP, Graphic Design</div>
              <ul>
                <li>
                  Chosen from a long list of candidates at Ivy Tech - Bloomington
                  to work as the junior web developer and design artist.
                </li>
                <li>
                  Implemented and developed new PHP, HTML, and CSS on a
                  professional level in support of the lead developer
                </li>
                <li>
                  Creation and support of the website for the Indianapolis Center
                  for Life Sciences and the Student Government Association
                </li>
              </ul>

              <div className="banner-title">
                <h2>Education</h2>
              </div>
              <div>
                <strong>Ivy Tech - Bloomington, IN</strong>
              </div>
              <div>Associate of Applied Science (A.A.S)</div>
              <div>August 2007 - May 2009</div>

              <div id="back-to-top" style={{ margin: '2em 0 1em 0', textAlign: 'center' }}>
                <Button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  variant="contained"
                  color="primary"
                  startIcon={<ArrowUpwardIcon />}
                  disableElevation
                >
                  Back to Top
                </Button>
              </div>
              
            </Container>
          }
        />
      </div>
    );
  }
}

export default Resume;
