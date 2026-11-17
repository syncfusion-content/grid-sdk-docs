export interface IssueData {
    issueId: string;
    title: string;
    status: string;
    priority: string;
    reporter: string;
}

export const issueData: IssueData[] = [
    {
        issueId: 'BUG-00001',
        title: 'Login page CSS override causing layout shift',
        priority: 'Critical',
        status: 'Open',
        reporter: 'Sarah Anderson'
    },
    {
        issueId: 'FEATURE-00002',
        title: 'Add dark mode support for dashboard',
        priority: 'Medium',
        status: 'In Review',
        reporter: 'Michael Bennett'
    },
    {
        issueId: 'IMPROVEMENT-00003',
        title: 'Optimize database queries for bulk operations',
        priority: 'High',
        status: 'In Progress',
        reporter: 'Jennifer Chen'
    },
    {
        issueId: 'BUG-00004',
        title: 'Memory leak in data caching mechanism',
        priority: 'Critical',
        status: 'Open',
        reporter: 'David Davis'
    },
    {
        issueId: 'FEATURE-00005',
        title: 'Implement bulk edit for grid records',
        priority: 'Low',
        status: 'In Review',
        reporter: 'Emily Evans'
    },
    {
        issueId: 'IMPROVEMENT-00006',
        title: 'Improve error message clarity and actionability',
        priority: 'Medium',
        status: 'In Progress',
        reporter: 'James Foster'
    },
    {
        issueId: 'BUG-00007',
        title: 'Dropdown filter values not persisting after refresh',
        priority: 'High',
        status: 'Open',
        reporter: 'Lisa Garcia'
    },
    {
        issueId: 'FEATURE-00008',
        title: 'Create custom report builder interface',
        priority: 'Low',
        status: 'Resolved',
        reporter: 'Robert Harrison'
    },
    {
        issueId: 'IMPROVEMENT-00009',
        title: 'Enhance grid column resizing performance',
        priority: 'High',
        status: 'In Progress',
        reporter: 'Maria Ibrahim'
    },
    {
        issueId: 'BUG-00010',
        title: 'Null reference error in profile settings',
        priority: 'Critical',
        status: 'Open',
        reporter: 'Christopher Johnson'
    }
];
