# some nots

## TODO


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
    // category
    {
        // order,
        // think of a way to do order??
        // native order of the array. so no need to create another prop
        name,
        links: [
            { desc, url, keyCode }
        ]

    }
]
```
