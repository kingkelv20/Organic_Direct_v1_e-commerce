// data-export.js

document.addEventListener('DOMContentLoaded', function () {
    const exportDataButton = document.getElementById('export-data-button');

    exportDataButton.addEventListener('click', function () {
        // Send an AJAX request to the server to export user data
        fetch('/api/export-data')
            .then(response => response.blob())
            .then(blob => {
                // Create a download link for the exported data
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                a.download = 'user_data.csv'; // Specify the file name
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
            })
            .catch(error => {
                console.error('Error:', error);
                // Handle the error or show an error message
            });
    });
});

