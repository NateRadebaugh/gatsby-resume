import React from "react";

import Layout from "../components/layout";
import Group from "../components/group";
import Item from "../components/item";

const IndexPage = () => (
  <Layout>
    <Group name="Software Skills">
      Git, and SVN. HTML, CSS, Angular, React, PHP, and SQL. C/C++/CX/C#, and
      Java.
    </Group>

    <Group name="Education">
      <Item
        name="Purdue University"
        tagline="B.S., Computer Science, concentrations in Software Engineering and Programming Languages"
        location="West Lafayette, IN"
        dates="May 2013"
      />
    </Group>

    <Group name="Work Experience">
      <Item
        name="SWC Technology Partners"
        tagline="Staff Consultant"
        location="Oak Brook, IL"
        dates="May 2017 - Present"
      >
        <>
          Working with clients across the greater Chicago region on web projects
          of scale in a variety of technologies including .NET MVC and Java
          Spring Boot backends and various JS front-end technologies.
        </>
      </Item>

      <Item
        name="Microsoft"
        tagline="Software Development Engineer II"
        location="Redmond, WA"
        dates="December 2015 - May 2017"
      >
        <>
          Worked with a team of about 20 developers to rearchitect how Windows
          UI is created for different products (Phone, Desktop, etc.)
        </>
        <>
          Led architectural decisions for componentization of Windows for future
          shells, mentoring Jr. team members. Met with specific owners and led
          inventory, consolidation, and forward planning of individual
          components of Windows UI, including taskbar, navigation bar, action
          center, etc.
        </>
        <>
          Became subject matter expert at XAML UI markup and efficient data
          binding through the MVVM pattern. Led team through decisions about
          performance and memory optimizations and improvements in back end and
          front end.
        </>
      </Item>

      <Item
        name="Microsoft"
        tagline="Software Development Engineer"
        location="Redmond, WA"
        dates="August 2013 - December 2015"
      >
        <>
          Implemented home page of Cortana app including personalized welcome
          text and help tips UI.
        </>
        <>
          Extended phone functionality and experiences for a large external
          display, providing a "Desktop-like" experience when connecting a phone
          to a TV/keyboard/mouse.
        </>
        <>
          Owned the first-run experience, configuration, and virtual touchpad
          application for this new "Desktop-like" experience on Windows Phones.
        </>
      </Item>

      <Item
        name="Microsoft"
        tagline="Software Development Engineer Intern"
        location="Redmond, WA"
        dates="May 2012 - July 2012"
      >
        Worked the Microsoft Wallet team, within Windows Phone division. Ported
        barcode generation functionality from Microsoft Office apps to be
        available to apps on Windows Phone.
      </Item>

      <Item
        name="Qualcomm"
        tagline="Interim Engineering Intern"
        location="San Diego, CA"
        dates="May 2011 - August 2011"
      >
        Wrote tools using Batch, Perl, Visual C++, and the MFC framework to
        automate running tests, generating regression reports, and sending email
        reports.
      </Item>

      <Item
        name="Purdue ResNet"
        tagline="Senior Software Developer"
        dates="Fall 2010 - Spring 2013"
      >
        <>
          Led a team of 8 student developers in the development and maintenance
          of a PHP/MySQL driven management tool using the open source PHP MVC
          framework FuelPHP and open source Bootstrap, including Perl scripts to
          help monitor data usage across the network.
        </>
        <>
          Administered multiple Linux web and database servers used for
          development, test, and production environments.
        </>
        <>Active role in interviewing, hiring, and training of new employees.</>
      </Item>
    </Group>
  </Layout>
);

export default IndexPage;
