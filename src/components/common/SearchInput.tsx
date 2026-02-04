import { Search } from 'lucide-react';
import { Input } from '../ui/Input';
import { UI } from '../../constants';

export const SearchInput = () => {
    return (
        <Input
            type="text"
            placeholder={UI.SEARCH_PLACEHOLDER}
            leftIcon={<Search size={18} />}
            className="w-80"
        />
    );
};
