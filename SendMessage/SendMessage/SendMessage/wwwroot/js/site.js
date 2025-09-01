// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

const connection = new signalR.HubConnectionBuilder()
    .withUrl('/MainHub')
    .withAutomaticReconnect()
    .build();

connection.on("RecieveMessage", (message) => {
    $('#signalr-message').prepend($('<div/>').text(message));
});

$('#btnBroadcast').click(function () {
    var message = $('#broadcast').val();
    connection.invoke("broadcastMessage", message).catch(err => {
        console.error(err);
    })
});

async function start() {
    try {
        await connection.start();
        console.log("Start");
    }
    catch (e) {
        console.log(e);
        setTimeout(() => start(), 500);

    }
};

connection.onclose(async () => {
    await start();
});

start();



/*
نوشته شده توسط هوش مصنوعی
// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

const connection = new signalR.HubConnectionBuilder()
    .withUrl('/MainHub')
    .withAutomaticReconnect()
    .build();

connection.on("RecieveMessage", (message) => {
    $('#signalr-message').prepend($('<div/>').text(message));
});

$('#btnBroadcast').click(function () {
    var message = $('#broadcast').val();
    // بررسی وضعیت اتصال قبل از ارسال
    if (connection.state === signalR.HubConnectionState.Connected) {
        connection.invoke("broadcastMessage", message).catch(err => {
            console.error(err);
        });
    } else {
        console.error("Cannot send message: Connection is not established.");
        // اختیاری: اطلاع‌رسانی به کاربر
        alert("اتصال به سرور برقرار نیست. لطفاً دوباره تلاش کنید.");
    }
});

async function start() {
    try {
        await connection.start();
        console.log("Connection started successfully");
        // فعال کردن دکمه پس از اتصال
        $('#btnBroadcast').prop('disabled', false);
    } catch (e) {
        console.error("Connection failed: ", e);
        setTimeout(() => start(), 500);
    }
}

// مدیریت قطع شدن اتصال
connection.onclose(async () => {
    console.log("Connection closed. Attempting to reconnect...");
    $('#btnBroadcast').prop('disabled', true); // غیرفعال کردن دکمه در صورت قطع اتصال
    await start();
});

// غیرفعال کردن دکمه تا زمانی که اتصال برقرار شود
$('#btnBroadcast').prop('disabled', true);

// شروع اتصال به صورت خودکار
start();
*/