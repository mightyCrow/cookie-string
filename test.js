import test from 'ava';
import m from './';

test('main', t => {
	t.is(m('', ''), '');
	t.is(m('hello', 'world'), 'hello=world');
});

test('options', t => {
	t.is(m('hello', 'world', {path: '/dummy'}), 'hello=world;path=/dummy');
	t.is(m('hello', 'world', {domain: 'example.com'}), 'hello=world;domain=example.com');
	t.is(m('hello', 'world', {maxAge: 31536000}), 'hello=world;max-age=31536000');
	t.is(m('hello', 'world', {expires: new Date()}), 'hello=world;expires=' + (new Date()).toUTCString());
	t.is(m('hello', 'world', {secure: true}), 'hello=world;secure');
});
