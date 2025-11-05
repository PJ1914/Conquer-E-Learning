const Requirements = require('../models/requirements.model');

const createRequirement = async (payload) => {
  const reqDoc = new Requirements(payload);
  return reqDoc.save();
};

const getRequirementById = async (id) => {
  return Requirements.findById(id);
};

const updateRequirement = async (id, payload) => {
  return Requirements.findByIdAndUpdate(id, payload, { new: true, runValidators: true });
};

const deleteRequirement = async (id) => {
  return Requirements.findByIdAndDelete(id);
};

module.exports = {
  createRequirement,
  getRequirementById,
  updateRequirement,
  deleteRequirement
};
