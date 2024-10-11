import Auth from './Auth';
import $ from 'jquery';

document.addEventListener('DOMContentLoaded', function () {
    const name = getCookie('name');
    if (name) {
        $('.message').html(`Hi, ${name}, you are logged in.`);
    } else {
        alert('You are not logged in.');
        window.location.href = '../index.html';
    }
});

$('.logout').on('click', function () {
    Auth.logout();
    document.cookie = 'name=; sessionId=; max-age=-1; path=/; samesite=strict';
    window.location.href = '../index.html';
});

function getCookie(name: string) {
    let matches = document.cookie.match(
        new RegExp(
            '(?:^|; )' +
                name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
                '=([^;]*)',
        ),
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
