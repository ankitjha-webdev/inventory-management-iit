const router = require('express').Router();
const InstrumentList = require('../model/InstrumentList');

// create instrument list
router.post('/', async (req, res) => {
    const instrument = new InstrumentList({
        name: req.body.name,
        type: req.body.type,
        description: req.body.description,
        image: req.body.image,
        createdAt: Date.now(),
        updatedAt: Date.now()
    });
    try {
        const newInstrument = await instrument.save();
        res.status(200).json(newInstrument);
    } catch (error) {
        res.status(500).send(error);
    }
})

// update instrument list
router.put('/:id', async (req, res) => {
    try {
        const updatedInstrument = await InstrumentList.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, { new: true });
        res.status(200).json("Instrument updated successfully");
    } catch (error) {
       res.status(500).send(error);
    } 
})

// delete instrument list
router.delete('/:id', async (req, res) => {
    try {
        const instrument = await InstrumentList.findById(req.params.id);   
        try {
            await InstrumentList.deleteMany({name: instrument.name});
            await InstrumentList.findByIdAndDelete(req.params.id)
            res.status(200).json("Instrument deleted successfully");
        } catch (error) {
            res.status(500).json(error);
        }
    } catch (error) {
        res.status(404).send("Instrument not found");
    }
        
})

// get instrument list
router.get('/:id', async (req, res) => {
    try {
        const instrument = await InstrumentList.findById(req.params.id);
        const {createdAt, updatedAt, ...withoutCreatedAtAndUpdatedAt} = instrument._doc;
        res.status(200).json(withoutCreatedAtAndUpdatedAt);
    } catch (error) {
        res.status(500).json(error + "Instrument not found at this id " + req.params.id);
    }

})

// get all instrument lists
router.get('/', async (req, res) => {
    try {
        const instruments = await InstrumentList.find();
        res.status(200).json(instruments);
    } catch (error) {
        res.status(500).json(error);
    }

})

// get all instrument lists by type
router.get('/type/:type', async (req, res) => {
    try {
        const instruments = await InstrumentList.find({type: req.params.type});
        res.status(200).json(instruments);
    } catch (error) {
        res.status(500).json(error);
    }

})

// get all instrument lists by name

router.get('/name/:name', async (req, res) => {
    try {
        const instruments = await InstrumentList.find({name: req.params.name});
        res.status(200).json(instruments);
    } catch (error) {
        res.status(500).json(error);
    }

})

// get all instrument lists by type and name
router.get('/type/:type/name/:name', async (req, res) => {
    try {
        const instruments = await InstrumentList.find({type: req.params.type, name: req.params.name});
        res.status(200).json(instruments);
    } catch (error) {
        res.status(500).json(error);
    }

})

module.exports = router;