const timelineTemplate = `
body .data .timeline .timeline-badge {
    background-color: var(--card-main-colour);
}

body .data .timeline::before {
    background-color: var(--card-main-colour);
}

body .data .timeline .timeline-panel {
    border: 2px solid var(--card-main-colour);
}

body .data .timeline .timeline-panel::before {
    border-right: 15px solid var(--card-main-colour);
    border-left: 0 solid var(--card-main-colour);
}`;

export { timelineTemplate };
