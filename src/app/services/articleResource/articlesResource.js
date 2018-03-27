function TodoResourceFn($resource) {
    return $resource('articles/all.json');
}

export default TodoResourceFn;
