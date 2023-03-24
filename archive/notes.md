# some nots

## notes

- as always styling is a pain but i should figgure that out on paper first
- for adding, there is trouble in adding a new link for a category.
  - it doesnt rerender but does add in the list
- could try delete and rename category first??
- then do crud for links

using object attempt
- transforming is simple but now category is not updated

## functionalities

- CRUD category
- CRUD links
- regex validation
- Search text bar
- keydown listener (check while search bar !focus)

## data format

JSON string in local storage

```js
// stored as json string in local storage
[
    {
        categoryLabel: "category name",
        links: [
            { text: "display name", url: "link"}
        ]

    }
]
```

## App architecture

Vanilla react app using Material ui for styling

no database required as it does speed up load time and development time.

The whole purpos of this app is to assist with daily browser use, storing the user's go to links

use cases:
- add category
- add links
- edit links
- edit category
- delete links
- delete category

### operations

- Main page
  - Search bar
  - Add category
  - Category Links
    - edit category (CRUD)
    - add links
    - edit links(CRUD)