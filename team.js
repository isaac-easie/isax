// Example JavaScript to show/hide more details
document.querySelectorAll('.team-member').forEach(member => {
    member.addEventListener('click', () => {
        const paragraph = member.querySelector('p');
        const moreInfo = paragraph.textContent === 'Read More...';
        paragraph.textContent = moreInfo ? 'This is more info about the team member.' : 'Read More...';
    });
});
