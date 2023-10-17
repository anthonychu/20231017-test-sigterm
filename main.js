process.on('SIGTERM', () => {
    console.info('SIGTERM signal received.');
    setTimeout(() => {
        console.log('Process is exiting...');
        process.exit(0);
    }, 8000);
});

console.log('Process has started');
setInterval(() => {
    console.log('Process is running...');
}, 5000);