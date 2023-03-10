---
Author: David Zhang
Version: 1.0
Since: 30/9/2021
Version: 2.0
Since: 23/11/2021
---

# HTML Notes

> Based on [HTML Crash Course](https://www.youtube.com/watch?v=UB1O30fR-EE&t=762s) & [Coursera](https://www.coursera.org/learn/html-css-javascript-for-web-developers?)

***

## Technologies that Drive the Web

* **HTML**: **Structure**

* **CSS**: **Style**

* **JavaScript**: **Behavior**

***

## Intro

* **Hypertext Markup Language**
	* Hypertext: text which contains links to other texts. (Hypermedia)
	* Markup: content
	* Language: own syntax and semantics
* **NOT** a programming language
* Job: Annotate content and Define document structure

***

## History of HTML

![0acad8dd7dd47375e0ff311eba271da](C:\Users\LENOVO\AppData\Local\Temp\WeChat Files\0acad8dd7dd47375e0ff311eba271da.png)

***

## Creating a HTML file

* Does NOT need a server
* file with `.html` extension
* Runs in a web browser
* `index.html` is the root / home page of a website by default
* Sequentially rendering

***

## Tag Syntax

```html
<tagname>content</tagname>

<h1>About us</h1>
<p>This is a paragraph</p>
<br/>
<br>(fine in HTML5)
```

* Element name surrounded by angle brackets

* Normally come in pairs(start and end tags)

* Self closing tag with one start tag

### Inline vs. Block Level Elements 

> Officially not part of HTML5, but still used. Roughly equivalent to phrasing content & flow content

  #### Inline:

* Do not start on a new line 
* Take only the necessary width
* eg. `<span>`, `<img>`, `<a>`

#### Block:

* Start on a new line
* Take full width available
* eg. `<div>`, `<h1>`, `<p>`, `<form>`, `<a>`
***

## HTML Page Structure

```html
<!-- If html5 declaration is not specified, the page will be interpreted in quirks mode -->
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Page Title</title>
    </head>
    <body>
        <h1>My first heading</h1>
        <p>My first paragraph</p>
    </body>
</html>
```

### Doctype

* Explains what type of document the page is
* HTML 5, HTML 4, XHTML, etc

### Head

* Has nothing to do with the output in the browser
* Page title (is required)
* Links to CSS files and JavaScript files
* Metadata: descriptions and keywords, communicating information to the browser

### Body

* Actual markup displayed in the browser

***

## Tags

### Comment

```html
<!-- Comments -->
```

### Heading

```html
<!-- Well chosen content of H1 element is crucial to SEO (Search Ehgine Optimization) -->
<h1>Heading one</h1>
<h2>Heading two</h2>
<h3>Heading three</h3>
<h4>Heading four</h4>
<h5>Heading five</h5>
<h6>Heading six</h6>

<!-- not a heading, just small text -->
<small>text</small>
```

### Paragraph

```html
<p>
    Some content
</p>
```

### Bold and Emphasis

```html
<p>
    Some content
    <strong>some content</strong>
    <em>some content</em>
</p>
```

### Link

```html
<!-- Local link -->
<a href="smth.html">smth</a>

<!-- external link -->
<!-- in this way it will leave your site -->
<a href="https://google.com" title="Google">Google</a>

<!-- in this way it will save your site-->
<a href="https://google.com" target="_blank" title="Google">Google</a>

<!-- Linking to sections of a document -->
<a href="#section1">Section 1</a>
<section id="section1"></section>
```

### Image

```html
<a href="imageRoot">
	<img src="imageRoot" alt="somethingGoesWrong" width="200" height="500">
</a>
<!-- Always specify width and height to retain the layout if something happens -->
```

* Self closing
* `alt` attributes can show the text if something goes wrong with the image
* With a link to the image you can click the image to open it in the browser

### Tag  Attributes

```html
<tagname attrname="attrvalue">content</tagname>
```

* All tags can have attributes
* Provide information about an element
* Placed within the start tag
* Key/value pairs(id="someid")

### List

```html
<!-- unorder list -->
<ul>
    <li>List Item 1</li>
    <li>List Item 2</li>
    <li>List Item 3</li>
</ul>

<!-- order list -->
<ol>
    <li>List Item 1</li>
    <li>List Item 2</li>
    <li>List Item 3</li>
</ol>
```

* Very often, lists are used for structuring navigation portions of the web page

### Table

```html
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        	<td>David</td>
            <td>david@smth.com</td>
            <td>25</td>
        </tr>
        <tr>
        	<td>John</td>
            <td>john@smth.com</td>
            <td>35</td>
        </tr>
    </tbody>
</table>
```

### Form

```html
<form action="process.php" method="POST">
    <div>
        <label>First Name</label>
    	<!-- placeholder can show some content without deleting it when input -->
        <input type="text" name="firstName" placeholder="Enter your first name">
    </div>
    <div>
        <label>Last Name</label>
    	<input type="text" name="lastName">
    </div>
    <div>
        <label>Email</label>
    	<input type="email" name="email">
    </div>
    <div>
        <label>Message</label>
        <textarea name="message"></textarea>
    </div>
    <div>
        <label>Gender</label>
        <select name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
        </select>
    </div>
    <div>
        <label>Age:</label>
        <!-- predefined value -->
        <input type="number" name="age" value="30">
    </div>
    <div>
        <label>Birthday:</label>
        <input type="date" name="birthday">
    </div>
    <!-- a button -->
    <input type="submit" name="submit" value="Submit">
</form>
```

> **Web forms** are one of the main points of interaction between a user and a web site or application. Forms allow users to enter data, which is generally sent to a web server for processing and storage, or used on the client-side to immediately update the interface in some way (for example, add another item to a list, or show or hide a UI feature).

* HTML can create the actual look of the form but cannot add functionality to the form

### Line Break

```html
<br>

<!-- Horizontal rule -->
<hr>
```

### Button

* First form is inside a `<form>`

```html
<button click="someFunction">Click Me</button>
```

* Use programming language to implement functionality and make it dynamic

### Quotation

```html
<!-- not show the actual site -->
<blockquote cite="https://smth.com">
    content
</blockquote>

<p>
    The <abbr title="smth">Smth</abbr> is awesome
</p>

<!-- 斜体 -->
<p>
    <cite>HTML Notes</cite> by David
</p>
```

***

## HTML Semantic Tags

A semantic element clearly describes its meaning to both the **browser** and the **developer**, doesn't give any more functionality than a regular `div`

Used to construct the layout

```html
<header></header>
<footer></footer>
<aside></aside>
<main></main>
<article></article>
<nav></nav>
<section></section>
<details></details>
```

```html
<header id=""></header>
```

Can give a id to use CSS

***

## Meta Tags

```html
<head>
    <meta name="description" content="Awesome notes by David">
    <meta name="keyword" content="web design blog, web dev blog, hadjshell">
</head>
```

***

## HTML Character Entity References

* Help avoid rendering issues; Safeguard against more limited character encoding; Provide characters not available on keyboards

* 3 characters you should always escape:

  | Instead of | `<`    | `>`    | `&`     |
  | ---------- | ------ | ------ | ------- |
  | Using      | `&lt;` | `&gt;` | `&amp;` |

* Copyright symbol: `&copy;`

* None-breaking space: `&nbsp;`
