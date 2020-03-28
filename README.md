[![Netlify Status](https://api.netlify.com/api/v1/badges/a11c7529-5745-4c7f-a0a9-38821b3d8b2f/deploy-status)](https://app.netlify.com/sites/gallant-davinci-407a19/deploys)

# Test add react on php site

```
/front
    /pages
        index.tsx
        about.tsx

```

### index.php

```html
<h1>Title...</h1>
<!-- some html generate by php code  -->

<div id="root">...loading</div>
<!-- anywhere in the page -->

<script src="/build/runtime.js"></script>
<script src="/build/index.js"></script>
```

### about.php

```html
<div id="about"></div>
<!-- anywhere in the page -->

<div id="about2"></div>

<script src="/build/runtime.js"></script>
<script src="/build/about.js"></script>
```

the code look like this :

/front/pages/index.tsx

```tsx
import React from "react";
import { render } from "react-dom";
import { Counter } from "../components/Counter";

// add a React component Counter in index.php, in div with id root
render(<Counter />, document.getElementById("root"));
```

same for about:
/front/pages/about.tsx

```tsx
import React from "react";
import { render } from "react-dom";
import { OtherComponent } from "../components/OtherComponent";
import { AnotherComponent } from "../components/AnotherComponent";

// add a React component OtherComponent in about.php, in div with id about
render(<OtherComponent />, document.getElementById("about"));

// add a AnotherComponent
render(<AnotherComponent />, document.getElementById("about2"));
```
