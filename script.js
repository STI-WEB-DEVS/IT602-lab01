document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    const logToConsole = (data) => {
        console.log("New Submission Received:");
        console.table(data);
    };

    const saveToLocalStorage = (data) => {
        const existingSubmissions = JSON.parse(localStorage.getItem('contact_submissions')) || [];

        const submissionWithDate = { ...data, submittedAt: new Date().toLocaleString() };

        existingSubmissions.push(submissionWithDate);

        localStorage.setItem('contact_submissions', JSON.stringify(existingSubmissions));

        console.log(`Stored! Total submissions: ${existingSubmissions.length}`);
    };

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = new FormData(this);
            const data = Object.fromEntries(formData.entries());

            saveToLocalStorage(data);

            if (formMessage) {
                formMessage.textContent = `Submission saved successfully!`;
                formMessage.classList.remove('opacity-0');
                formMessage.classList.add('opacity-100', 'bg-blue-100', 'text-blue-800', 'text-center');

                setTimeout(() => formMessage.classList.replace('opacity-100', 'opacity-0'), 3000);
            }

            this.reset();
        });
    }
function viewSubmissions() {
    const list = document.getElementById('submissions-list');
    const empty = document.getElementById('empty-state');
    const data = JSON.parse(localStorage.getItem('contact_submissions')) || [];

    // Safety check in case the element doesn't exist on the current page
    if (!list) return;

    if (data.length === 0) {
        if (empty) empty.classList.remove('hidden');
        list.innerHTML = ''; // Clear list if empty
        return;
    }

    // Hide empty state if data exists
    if (empty) empty.classList.add('hidden');

    list.innerHTML = data.reverse().map(entry => `
        <tr class="flex flex-col md:table-row p-4 md:p-0 hover:bg-gray-50 transition-colors border-b border-gray-100">
            <td class="px-6 py-2 md:py-4 text-xs font-mono text-gray-400 flex justify-between items-center md:table-cell">
                <span class="font-bold text-gray-400 md:hidden uppercase text-[10px] tracking-widest">Timestamp</span>
                ${entry.submittedAt}
            </td>
            
            <td class="px-6 py-2 md:py-4 text-sm font-bold text-gray-800 flex justify-between items-center md:table-cell">
                <span class="font-bold text-gray-400 md:hidden uppercase text-[10px] tracking-widest">Sender</span>
                ${entry.name}
            </td>
            
            <td class="px-6 py-2 md:py-4 text-sm text-gray-600 flex justify-between items-center md:table-cell">
                <span class="font-bold text-gray-400 md:hidden uppercase text-[10px] tracking-widest">Contact</span>
                ${entry.contact}
            </td>
            
            <td class="px-6 py-2 md:py-4 text-sm text-blue-600 flex justify-between items-center md:table-cell">
                <span class="font-bold text-gray-400 md:hidden uppercase text-[10px] tracking-widest">Email</span>
                <span class="truncate ml-4 md:ml-0">${entry.email}</span>
            </td>
            
            <td class="px-6 py-2 md:py-4 text-sm text-gray-600 flex flex-col md:table-cell">
                <span class="font-bold text-gray-400 md:hidden uppercase text-[10px] tracking-widest mb-1">Message</span>
                <div class="md:max-w-xs xl:max-w-md">${entry.message}</div>
            </td>
        </tr>
    `).join('');
}

    const submissionsList = document.getElementById('submissions-list');

    if (submissionsList) {
        viewSubmissions();
    }

});