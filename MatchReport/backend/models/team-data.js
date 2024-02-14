class Team {
    constructor(data) {
        this.name = data.name || '';
        this.slug = data.slug || '';
        this.shortName = data.shortName || '';
        this.gender = data.gender || '';

        this.sport_id = Sport.id || 0;
        this.category_id = Category.id || 0;
        this.tournament_id = Tournament.tournament.parseTournament(data.tournament);
        this.primaryUniqueTournament_id = Tournament.primaryUniqueTorunament.parseTournament(data.primaryUniqueTorunament);
        this.manager_id = Manager.id || 0;
        this.venue_id = Venue.id || 0;

        this.userCount = data.userCount || 0;
        
        this.foundationDate = data.foundationDate || {};
        this.nameCode = data.nameCode || '';
        this.national = data.national || false;
        this.type = data.type || 0;
        this.id = data.id || 0;

        this.country = {
            alpha2: data.country.alpha2 || '',
            name: data.country.name || ''
        };

        this.fullName = data.fullName || '';
        
        this.teamColors = {
            primary: data.teamColors.primary || '',
            secondary: data.teamColors.secondary || '',
            text: data.teamColors.text || ''
        };

        this.foundationDateTimestamp = data.foundationDateTimestamp || 0;
    }
}

export default Team;