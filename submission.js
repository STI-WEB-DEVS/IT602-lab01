window.addEventListener('DOMContentLoaded', function() {
                const submissionsList = document.getElementById('submissions-list');
                const emptyState = document.getElementById('empty-state');
                
                console.log('Loading submissions...'); 
            
                const savedData = localStorage.getItem('contactSubmissions');
                console.log('Saved data:', savedData); 
                
                if (savedData) {
                    const submissions = JSON.parse(savedData);
                    console.log('Parsed submissions:', submissions); 
                    
                    if (submissions.length > 0) {
                       
                        emptyState.classList.add('hidden');
                        
                        submissionsList.innerHTML = submissions.reverse().map(submission => {
                            const date = new Date(submission.timestamp);
                            return `
                                <tr class="hover:bg-gray-50 transition">
                                    <td class="px-6 py-4 text-sm text-gray-600">${date.toLocaleString()}</td>
                                    <td class="px-6 py-4 text-sm font-semibold text-gray-900">${submission.name}</td>
                                    <td class="px-6 py-4 text-sm text-gray-600">${submission.email}</td>
                                    <td class="px-6 py-4 text-sm text-gray-700">${submission.message}</td>
                                </tr>
                            `;
                        }).join('');
                        
                        console.log('Table populated with', submissions.length, 'submissions');
                    } else {
                        
                        submissionsList.innerHTML = '';
                        emptyState.classList.remove('hidden');
                    }
                } else {
               
                    console.log('No data found in localStorage');
                    submissionsList.innerHTML = '';
                    emptyState.classList.remove('hidden');
                }
            });