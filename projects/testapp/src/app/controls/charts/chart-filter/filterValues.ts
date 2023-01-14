export interface chartfilter {
    year: number;
    fromweek: number;
    toweek: number;
    reportType: 'weekly' | 'yearly' | 'period'
}