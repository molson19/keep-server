# Keep Tech Spec

High level technical specification for this project. The aim is to think about the project abstractly, design for flexibility, and not choose vendors/tools too early on.

## Entities

```javascript
class User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

class Note {
  id: string;
  title: string;
  body: string;
  image_url: string;
  background_color_id: string;
  reminder_id: string;
  label_ids: string[];
  is_archived: boolean;
  is_pinned: string;
  collaborators: sting[]; // a note can have many collaborators
}

class Label {
  id: string;
  name: string;
  note_ids: string[];
}

enum RepeatCycle {
  DOES_NOT_REPEAT = 'DOES_NOT_REPEAT',
  DAILY = 'DAILY',
  WEEKLY = 'WEEKLY',
  MONTHLY = 'MONTHLY',
  YEARLY = 'YEARLY',
}

class Reminder {
  id: string;
  timestamp: number;
  repeat_cycle: RepeatCycle;
}
```

Relations

- one to many from users to notes
- many to many from collaborators to notes
- many to many from labels to notes
- one to one from notes to reminders


## APIs 

- CRUD on all entities: notes, reminders, labels, users. 
- API to pin a note
