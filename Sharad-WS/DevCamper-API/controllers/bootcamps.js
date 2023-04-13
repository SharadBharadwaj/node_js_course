// @desc    Get all bootcamps
// @route   Get /api/v1/bootcamps
// @access  Public
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({success: true, msg: 'Show allbootcamps.'});
}

// @desc    Get single bootcamp
// @route   Get /api/v1/bootcamps/:id
// @access  Public
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: `show bootcamp ${req.params.id}`})
}

// @desc    Create a new bootcamp
// @route   POST /api/v1/bootcamps/:id
// @access  Private
exports.createBootcamp = (req, res, next) => {

}

// @desc    Update a bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
exports.updateBootcamp = (req, res, next) => {

}

// @desc    Delete a bootcamp
// @route   POST /api/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamp = (req, res, next) => {

}
