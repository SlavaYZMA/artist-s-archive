import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

interface EssayData {
  titleKey: string;
  year: string;
  content: string;
  contentRu: string;
}

const essaysData: Record<string, EssayData> = {
  'systems-of-seeing': {
    titleKey: 'essay.systems.title',
    year: '2024',
    content: `What does it mean to see through a system? Not to see a system, but to adopt its mode of perception, to inhabit its particular blindnesses and clarities.

Every technology of vision carries with it a theory of what is worth seeing. The camera obscura taught us about projection and inversion. Photography introduced the decisive moment. Digital imaging dissolved the boundary between capture and construction.

Contemporary machine vision systems do not see as we see. They operate on probabilities, patterns, statistical regularities. They find faces where we see shadows. They miss what is obvious to us and notice what we cannot perceive.

To work with these systems is not to correct them or to expose their failures—though both are necessary—but to understand what they reveal about the nature of seeing itself. Every system of vision is also a system of blindness. What is excluded defines the frame as much as what is included.

The question is not whether machines can see, but what seeing becomes when it is distributed across human and non-human agents, when it operates at scales and speeds that exceed human perception, when it is entangled with systems of power and control.`,
    contentRu: `Что значит видеть через систему? Не видеть систему, а принять её способ восприятия, обитать в её особых слепых зонах и ясностях.

Каждая технология зрения несёт в себе теорию того, что стоит видеть. Камера-обскура научила нас проекции и инверсии. Фотография ввела решающий момент. Цифровая визуализация растворила границу между захватом и конструированием.

Современные системы машинного зрения видят не так, как мы. Они оперируют вероятностями, паттернами, статистическими закономерностями. Они находят лица там, где мы видим тени. Они упускают то, что очевидно для нас, и замечают то, что мы не можем воспринять.

Работать с этими системами означает не исправлять их или разоблачать их неудачи—хотя и то, и другое необходимо—но понимать, что они раскрывают о природе самого видения.`,
  },
  'notes-on-absence': {
    titleKey: 'essay.absence.title',
    year: '2023',
    content: `Absence is not the opposite of presence but its condition. Every act of presence creates new absences. Every recording captures certain frequencies while filtering others. Every archive preserves some traces while erasing others.

In networked space, presence and absence become more complex. We are present in multiple locations simultaneously—or rather, our data traces are. We are absent from the physical locations where our effects are felt. We are present to those who observe our traces and absent to those who do not.

The question of presence in digital space is not simply a question of where we are but of what persists. Data traces persist long after the event of their creation. They circulate, are copied, are analyzed, are forgotten. They constitute a form of presence that operates independently of our awareness or intention.

What does it mean to be present in a system that operates without our knowledge? What kind of presence is this—neither subjective nor objective, neither here nor there, but distributed across networks and databases, persistent but invisible?`,
    contentRu: `Отсутствие — не противоположность присутствия, а его условие. Каждый акт присутствия создаёт новые отсутствия. Каждая запись захватывает определённые частоты, отфильтровывая другие. Каждый архив сохраняет одни следы, стирая другие.

В сетевом пространстве присутствие и отсутствие становятся более сложными. Мы присутствуем в нескольких местах одновременно—или, точнее, присутствуют наши следы данных. Мы отсутствуем в физических местах, где ощущаются наши эффекты.

Вопрос о присутствии в цифровом пространстве — это не просто вопрос о том, где мы находимся, но о том, что сохраняется. Следы данных сохраняются долго после события их создания. Они циркулируют, копируются, анализируются, забываются.`,
  },
  'machine-as-witness': {
    titleKey: 'essay.machine.title',
    year: '2022',
    content: `The machine does not judge. It records. It processes. It outputs. But in doing so, it becomes a witness of a particular kind—one that registers without understanding, that preserves without remembering, that testifies without intention.

What does it mean to be witnessed by a machine? Surveillance systems observe constantly but attend to nothing. They capture everything and remember nothing until an event triggers retrieval. They are witnesses that do not know they are witnessing.

Yet their testimony is increasingly decisive. The camera's record, the sensor's log, the algorithm's output—these carry evidentiary weight that often exceeds human testimony. We trust the machine precisely because it does not interpret, because its record is presumed to be objective.

This is, of course, an illusion. Every sensor has its parameters. Every algorithm has its biases. Every system has its frame. But the illusion of mechanical objectivity persists, and with it, a gradual displacement of human judgment by algorithmic assessment.

The work attempts neither to humanize the machine nor to mechanize the human, but to hold open the space between them—to make visible the processes by which witnessing is transformed when it passes through technical systems.`,
    contentRu: `Машина не судит. Она записывает. Она обрабатывает. Она выдаёт результат. Но делая это, она становится свидетелем особого рода—тем, кто регистрирует без понимания, сохраняет без запоминания, свидетельствует без намерения.

Что значит быть свидетелем для машины? Системы наблюдения постоянно наблюдают, но ни на что не обращают внимания. Они захватывают всё и ничего не помнят, пока событие не запускает извлечение. Это свидетели, которые не знают, что свидетельствуют.

Однако их свидетельство всё более решающее. Запись камеры, журнал датчика, вывод алгоритма—всё это несёт доказательную силу, которая часто превосходит человеческое свидетельство.`,
  },
};

export default function EssayDetail() {
  const { id } = useParams<{ id: string }>();
  const { t, language } = useLanguage();

  const essay = id ? essaysData[id] : null;

  if (!essay) {
    return (
      <div className="content-max">
        <Link to="/essays" className="text-muted-foreground hover:text-foreground transition-colors">
          {t('label.back')}
        </Link>
        <p className="mt-8">Essay not found.</p>
      </div>
    );
  }

  const content = language === 'ru' ? essay.contentRu : essay.content;

  return (
    <div className="content-max">
      <Link 
        to="/essays" 
        className="text-muted-foreground hover:text-foreground transition-colors text-sm inline-block mb-8"
      >
        {t('label.back')}
      </Link>

      <header className="mb-8">
        <h1 className="text-2xl font-light mb-2">{t(essay.titleKey)}</h1>
        <span className="text-muted-foreground text-sm">{essay.year}</span>
      </header>

      <article className="border-t border-border pt-8">
        {content.split('\n\n').map((paragraph, index) => (
          <p key={index} className="text-body mb-6 last:mb-0">
            {paragraph}
          </p>
        ))}
      </article>
    </div>
  );
}
