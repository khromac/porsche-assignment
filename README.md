# Porsche-assignment

A brief description of what this project does and who it's for

Porsche Assignment repository!
This project is a modern web application inspired by Porsche, designed to showcase vehicle models with interactive UI components. Given to me as a coding interview assignment, it demonstrates my skills in React, TypeScript, and responsive design.

Technologies used:
- React TypeScript (with React Router)
- Tailwind for styling

## Run the project

Clone the project

```bash
  git clone https://github.com/khromac/porsche-assignment
```

Go to the project directory

```bash
  cd porsche-assignment
```

Install dependencies

```bash
  npm install
```

Start development

```bash
  npm run dev
```

Or build the project

```bash
  npm run build
  npm start
```

## Component explanation
Explanation for each component, variants, and usage

### Badge.tsx
Renders a compact, stylized badge—a small label with a colored background and uppercase text.

Typically used to visually denote categorical information, such as the engine type of a car (e.g., "Electric").

**Parameters:**

`value` - string value that will be displayed

**Usage example:**

```javascript
<Badge value="electric" />
```

### Button.tsx

Provides a customizable button element with style variants (`primary`, `secondary`) and size options (`large`, `small`).  
Handles click events and can be disabled.  
Accepts children for button content, supporting icons and text.

**Parameters:**

`type` - `primary` and `secondary` variant  
`size` - `large` and `small`  
`disabled` - boolean; disables button  
`children` - accepts other elements  
`onClick` - call-action  
`className` - used to add custom styling or override existing Tailwind styling

**Usage example:**

```javascript
<Button type="primary" size="small">
  <i className="fa-solid fa-arrow-right"></i>
</Button>

<Button
        key={key}
        type="secondary"
        className="h-14 w-14 flex items-center justify-center text-xl"
        onClick={() => window.open(item.link, "_blank")}>
  <i className={item.icon}></i>
</Button>
```

### Card.tsx
Displays a visually rich card for a Porsche model, including an image, name, description, and engine type badge.

Internally uses `Button` and `Badge`.

**Must** be wrapped around `CardWrapper`

**Parameters:**

`name` - title of the card  
`description` - subtitle of the card  
`image` - background image of the card  
`badgeText` - badge text
`onClick` - call-action when card is clicked

**Usage example:**

```javascript
<Card
        name="Sample 1"
        description="Sample description 1"
        image={SampleImage1}
        badgeText="variant1"
        onClick={() => console.log("Card clicked")}
/>
```

### CardWrapper.tsx
Arranges multiple `Card` components in a responsive flex container.  
Handles layout (vertical on mobile, horizontal/wrapped on desktop), spacing, and overflow behavior.

**Parameters:**

`children` - accepts Card elements

**Usage example:**

```javascript
<CardWrapper>
  <Card
          name="Sample 1"
          description="Sample description 1"
          image={SampleImage1}
          badgeText="variant1"
  />

  <Card
          name="Sample 2"
          description="Sample description 2"
          image={SampleImage2}
          badgeText="variant2"
  />
</CardWrapper>
```

### Select.tsx
Implements a custom dropdown select field for choosing from a set of options.  
Styled for brand consistency and supports dynamic option lists and change events.

**Parameters:**

`value` - current value  
`onChange` - handles changing state  
`options` - accepts object type `Record<string,string>`  
`className` - used to add custom styling or override existing Tailwind styling

**Usage example:**

```javascript
<Select options={engineModels} onChange={setFilter} value={filter} />
```

## Other component elements:
These components are static and not as customizable, used for grouping elements for easier readability.

### NavBar.tsx
Responsive navigation bar that is responsible for opening the `SideMenu` component.

### SideBar.tsx
Opens a from-left side menu containing some simple navigation buttons.
Closes on mouse click outside the element.

Internally uses useRef for DOM access to determine when and where mouse click happens.

SideBar internally contains `SideBarItem` for easier readability.

### Footer
Responsive footer containing `Button` components for social media and 'Learn more' button.
