export default function authorizeRole(allowedRoles = []) {
  return (req, res, next) => {
    const userRole = req.user.role || "normal";
    if (!allowedRoles.includes(userRole))
      return res.status(403).send("Access denied");
    next();
  };
}
