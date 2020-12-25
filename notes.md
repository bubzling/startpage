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
        groupName,
        links: [
            { desc, url, keyCode }
        ]

    }
]
```
