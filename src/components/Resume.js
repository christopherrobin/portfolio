import React from "react";
import { Container, Row, Col } from "reactstrap";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {Button, Typography} from "@material-ui/core";
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
                  <Typography variant="h3" component="h1">Resume</Typography>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <div id="quick-nav">
                    <div>Jump to:</div>
                    <AnchorLink href="#sportradar">Sportradar</AnchorLink>,&nbsp;
                    <AnchorLink href="#boom">Boom</AnchorLink>,&nbsp;
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
                  ECMAScript (ES6+), Node.js, React, GraphQL, Redux, Next.js, TypeScript, ESLint, Automated Unit Testing (Mocha, Jest, Chai, Sinon, Selenium), HTML/CSS (+Bootstrap, Material-UI, Tailwind, SASS), AWS (EC2, S3, RDS, Lambdas, DynamoDB, CloudFront, IAM, CloudWatch), Google Cloud Platform
                  </p>

                  <h3>Proficient</h3>
                  <p>Scala, Redis, Kubernetes, Ruby, Java EE, C# .NET, PHP, SQL/MySQL/NoSQL</p>

                  <h3>Summary</h3>
                  <ul>
                    <li>
                      HTML 5 / CSS 3 ( + Material UI, Bootstrap, Tailwind, SASS, LESS)
                    </li>
                    <li>
                      JavaScript (ECMAScript, Babel, Next.js, NodeJS, React,
                      Redux, Underscore/Lodash, Webpack, Apollo GraphQL)
                    </li>
                    <li>C# / C++ / ASP.NET</li>
                    <li>Java EE, JSTL, Scala, Ruby</li>
                    <li>SQL / MySQL / NoSQL</li>
                    <li>
                      Automated Unit Testing (Mocha, Jest, Chai, Sinon, Selenium)
                    </li>
                    <li>WCAG 2.2 and ADA Compliance</li>
                    <li>UI / UX Development and Testing</li>
                    <li>Agile (Scrum) Software Development</li>
                    <li>Continuous delivery using tools like AWS, GitHub, CircleCI, Docker, and Jenkins</li>
                  </ul>

                  <p>
                    + Github, Optimizely, Akamai, Segment, Google
                    Apps/AdSense/Analytics, Adobe Dynamic Tag Management, Confluence, JIRA, Blockchain technology
                  </p>
                </Col>
              </Row>

              <div className="banner-title">
                <h2>Professional Experience</h2>
              </div>
              <div id="sportradar">
                <strong>Senior Software Engineer at Sportradar</strong>
              </div>
              <em>September 2022 - Present</em>
              <div>Node.js, React, TypeScript, Apollo GraphQL, Tailwind, Material-UI, Recharts, D3, AWS Services (EC2, Lambda, DynamoDB, S3, IAM, CloudWatch, and more)</div>
              <ul>
                <li>
                  Leading frontend development as senior engineer for the Delivery team, establishing robust patterns and tooling adopted across the US Media development organization
                </li>
                <li>Architected systems handling billions of daily data points through distributed microservice architecture and multiple frontend services</li>
                <li>Served as Frontend architect for the Sportradar Developer Portal, enabling our client engineers to manage their API usage and access real-time analytics</li>
                <li>Designed and implemented scalable JavaScript solutions using functional programming principles, immutable data patterns, and unidirectional data flow for applications serving millions of users</li>
                <li>Maintained code quality through creation, review, and maintenance of distributed applications across the microservice ecosystem</li>
                <li>Collaborated cross-functionally with product owners, UX designers, customer service representatives, and external stakeholders to translate business requirements into technical solutions</li>
                <li>Led project management efforts by decomposing complex initiatives into manageable stories and tasks, enabling accurate estimation and on-time delivery</li>
              </ul>

              <div id="boom">
                <strong>Software Engineer at Boom Entertainment</strong>
              </div>
              <em>August 2021 - September 2022</em>
              <div>JavaScript, React, TypeScript, Redux, Material-UI, Node.js, Next.js, Craco, SWC, Jest, ESLint, Husky</div>
              <ul>
                <li>
                  Software engineer leading front and back end development for the internal operations application at Boom, a tech company that works with professional sports leagues and large media companies. (NBC, NFL, YES, Barstool, Chirp Golf)
                </li>
                <li>Worked closely with the Sportradar API to create and maintain a robust collection of applications and workflows that are pivotal to Boom's success</li>
                <li>Lead and architected initiatives for outside vendors that were used by millions of people and distributed to viewers of NBC, CBS, etc.</li>
              </ul>

              <div id="angi">
                <strong>Senior Software Engineer at Angi/Angie's List</strong>
              </div>
              <em>July 2015 – June 2021</em>
              <div>JavaScript (ES6+), React, Redux, Next.js, Typescript, Node.js, Scala, Bootstrap, SASS</div>
              <ul>
                <li>
                  Senior software engineer leading front-end initiatives, writing clean and reusable JavaScript, and mentoring junior developers
                </li>
                <li>Led a massive front-end rebranding effort from Angie's List to Angi</li>
                <li>Responsible for giving constructive feedback through development help, code reviews, and retrospectives to less experienced engineers</li>
                <li>Participated as part of the transition team after the IAC acquisition and the following Home Advisor/Handy/Angie's List merger</li>
                <li>In 2016 I was part of the team that finished a multiple year initiative to drop the pay wall, integrate a lead generation vertical, and migrate our website to a completely new state-of-the-art platform</li>
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
                  which included a focus on responsive, mobile first design
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
                  Worked extensively with database administrators, marketing teams,
                  and our back-end engineer to convert two Visual Basic websites
                  to C# .NET MVC
                </li>
                <li>
                  Technical analysis, maintenance, and support for Google
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
                  Spam-proofed all email addresses and contact forms using
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

              <div className="banner-title">
                <h2>Personal Projects</h2>
              </div>
              <div>Personal projects available at <a href="https://github.com/christopherrobin/" target="_blank" rel="noopener noreferrer">https://github.com/christopherrobin/</a></div>

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