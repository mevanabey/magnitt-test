export const _FORMAT_DATE = (date) => { 
    const format_options = { weekday: 'short', month: 'short', day: 'numeric' };
    const date_object = new Date(date);

    return date_object.toLocaleDateString("en-US", format_options);
};