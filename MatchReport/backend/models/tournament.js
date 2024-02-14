class Tournament {
    constructor(data) {
        // Tournament
        this.tournament = this.parseTournament(data.tournament);

        // Primary Unique Tournament
        this.primaryUniqueTournament = this.parseTournament(data.primaryUniqueTournament);
    }

    parseTournament(tournamentData) {
        return {
            name: tournamentData.name || '',
            slug: tournamentData.slug || '',
            primaryColorHex: tournamentData.primaryColorHex || '',
            secondaryColorHex: tournamentData.secondaryColorHex || '',
            category: {
                name: tournamentData.category.name || '',
                slug: tournamentData.category.slug || '',
                id: tournamentData.category.id || 0,
                flag: tournamentData.category.flag || '',
                alpha2: tournamentData.category.alpha2 || ''
            },
            userCount: tournamentData.userCount || 0,
            hasPerformanceGraphFeature: tournamentData.hasPerformanceGraphFeature || false,
            id: tournamentData.id || 0,
            country: {
                // Add country properties if available
            },
            displayInverseHomeAwayTeams: tournamentData.displayInverseHomeAwayTeams || false
        };
    }
}