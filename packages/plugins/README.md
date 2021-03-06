# Plugins

Plugins module for WordPress.

## Installation

Install the module

```bash
npm install @wordpress/plugins --save
```

_This package assumes that your code will run in an **ES2015+** environment. If you're using an environment that has limited or no support for ES2015+ such as lower versions of IE then using [core-js](https://github.com/zloirock/core-js) or [@babel/polyfill](https://babeljs.io/docs/en/next/babel-polyfill) will add support for these methods. Learn more about it in [Babel docs](https://babeljs.io/docs/en/next/caveats)._

### Plugins API

<!-- START TOKEN(Autogenerated API docs) -->

#### getPlugin

[src/index.js#L2-L2](src/index.js#L2-L2)

Returns a registered plugin settings.

**Parameters**

-   **name** `string`: Plugin name.

**Returns**

`?Object`: Plugin setting.

#### getPlugins

[src/index.js#L2-L2](src/index.js#L2-L2)

Returns all registered plugins.

**Returns**

`Array`: Plugin settings.

#### PluginArea

[src/index.js#L1-L1](src/index.js#L1-L1)

A component that renders all plugin fills in a hidden div.

**Usage**

```js
// Using ES5 syntax
var el = wp.element.createElement;
var PluginArea = wp.plugins.PluginArea;

function Layout() {
	return el(
		'div',
		{},
		'Content of the page',
		PluginArea
	);
}
```

```js
// Using ESNext syntax
const { PluginArea } = wp.plugins;

const Layout = () => (
	<div>
		Content of the page
		<PluginArea />
	</div>
);
```

**Returns**

`WPElement`: Plugin area.

#### registerPlugin

[src/index.js#L2-L2](src/index.js#L2-L2)

Registers a plugin to the editor.

**Usage**

```js
// Using ES5 syntax
var el = wp.element.createElement;
var Fragment = wp.element.Fragment;
var PluginSidebar = wp.editPost.PluginSidebar;
var PluginSidebarMoreMenuItem = wp.editPost.PluginSidebarMoreMenuItem;
var registerPlugin = wp.plugins.registerPlugin;

function Component() {
	return el(
		Fragment,
		{},
		el(
			PluginSidebarMoreMenuItem,
			{
				target: 'sidebar-name',
			},
			'My Sidebar'
		),
		el(
			PluginSidebar,
			{
				name: 'sidebar-name',
				title: 'My Sidebar',
			},
			'Content of the sidebar'
		)
	);
}
registerPlugin( 'plugin-name', {
	icon: 'smiley',
	render: Component,
} );
```

```js
// Using ESNext syntax
const { Fragment } = wp.element;
const { PluginSidebar, PluginSidebarMoreMenuItem } = wp.editPost;
const { registerPlugin } = wp.plugins;

const Component = () => (
	<Fragment>
		<PluginSidebarMoreMenuItem
			target="sidebar-name"
		>
			My Sidebar
		</PluginSidebarMoreMenuItem>
		<PluginSidebar
			name="sidebar-name"
			title="My Sidebar"
		>
			Content of the sidebar
		</PluginSidebar>
	</Fragment>
);

registerPlugin( 'plugin-name', {
	icon: 'smiley',
	render: Component,
} );
```

**Parameters**

-   **name** `string`: A string identifying the plugin. Must be unique across all registered plugins.
-   **settings** `Object`: The settings for this plugin.
-   **settings.icon** `(string|WPElement|Function)`: An icon to be shown in the UI. It can be a slug of the Dashicon, or an element (or function returning an element) if you choose to render your own SVG.
-   **settings.render** `Function`: A component containing the UI elements to be rendered.

**Returns**

`Object`: The final plugin settings object.

#### unregisterPlugin

[src/index.js#L2-L2](src/index.js#L2-L2)

Unregisters a plugin by name.

**Usage**

```js
// Using ES5 syntax
var unregisterPlugin = wp.plugins.unregisterPlugin;

unregisterPlugin( 'plugin-name' );
```

```js
// Using ESNext syntax
const { unregisterPlugin } = wp.plugins;

unregisterPlugin( 'plugin-name' );
```

**Parameters**

-   **name** `string`: Plugin name.

**Returns**

`?WPPlugin`: The previous plugin settings object, if it has been successfully unregistered; otherwise `undefined`.

#### withPluginContext

[src/index.js#L1-L1](src/index.js#L1-L1)

A Higher Order Component used to inject Plugin context to the
wrapped component.

**Parameters**

-   **mapContextToProps** `Function`: Function called on every context change, expected to return object of props to merge with the component's own props.

**Returns**

`Component`: Enhanced component with injected context as props.


<!-- END TOKEN(Autogenerated API docs) -->

<br/><br/><p align="center"><img src="https://s.w.org/style/images/codeispoetry.png?1" alt="Code is Poetry." /></p>
