module.exports = {
    create: (req, res, next) => {
        const db = req.app.get('db');
        var name = req.body.name;
        var description = req.body.description;
        var price = req.body.price;
        var imageurl = req.body.imageurl;

        db.create_product([name, description, price, imageurl])
        .then(() => res.status(200).send())
        .catch(() => res.status(500).send());
    },
    getOne: (req, res, next) => {
        const db = req.app.get('db');
        var id = req.params.id;

        db.read_product([id])
        .then(product => res.status(200).send(product))
        .catch(() => res.status(500).send());
    },
    getAll: (req, res, next) => {
        const db = req.app.get('db');

        db.read_products()
        .then(products => res.status(200).send(products))
        .catch(() => res.status(500).send());
    },
    update: (req, res, next) => {
        const db = req.app.get('db');
        var id = req.params.id;
        var desc = req.query.desc;

        db.update_product([id,desc])
        .then(() => res.status(200).send())
        .catch(() => res.status(500).send());
    },
    delete: (req, res, next) => {
        const db = req.app.get('db');
        var id = req.params.id;

        db.delete_product([id])
        .then(() => res.status(200).send())
        .catch(() => res.status(500).send());
    }
}