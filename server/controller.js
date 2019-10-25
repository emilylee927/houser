module.exports = {
    getHouses: (req, res) => {
        const db = req.app.get('db');
        db
        .get_houses()
        .then(response => {
            res.status(200).json(response);
        })
        .catch(err => console.log(err));
    },
    createHouse: (req, res) => {
        const db = req.app.get('db');
        const {name, address, city, state, zip, image_url, mortgage, rent} = req.body;
        db
        .create_house([name, address, city, state, zip, image_url, mortgage, rent])
        .then(response => {
            res.sendStatus(200);
        })
        .catch(err => console.log(err));
    },
    deleteHouse: (req, res) => {
        const db = req.app.get('db');
        const {house_id} = req.params;
        db
        .delete_house([house_id])
        .then(response => {
            res.sendStatus(200);
        })
        .catch(err => console.log(err));
    }
}