class AdminHomepageRoutes {
    constructor(router, adminHomepageController) {
        this.router = router;
        this.adminHomepageController = adminHomepageController;
        this.registerRoutes();
    }

    registerRoutes() {
        this.router.get('/admin/homepage', this.adminHomepageController.getHomepageSettings);
        this.router.post('/admin/homepage', this.adminHomepageController.updateHomepageSettings);
    }
}

module.exports = AdminHomepageRoutes;