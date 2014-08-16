# sails-generate-new-ember

A generator for Sails.js, uses `sails-generate-frontend-ember` and `sails-generate-backend-ember`.


## Usage

### Modify your `.sailsrc` file (in your home directory or working directory)

```javascript
{
    "generators" : {
        "modules" : {
            "new" : "sails-generate-new-ember",
            "frontend" : "sails-generate-frontend-ember",
            "backend" : "sails-generate-backend-ember"
        }
    }
}
```

#### On the command line

```sh
sails new my-app-name
```

## License

See `LICENSE.md`.

