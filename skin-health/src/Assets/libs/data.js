import Injection from '../../images/injection.svg';
import Facial from '../../images/facial-treatment.svg';
import Spa from '../../images/spa.svg';
import SkinnProblem from '../../images/skin-problem.svg';
import Moistuire from '../../images/moisturizing.svg';
import Acne  from '../../images/acne.svg'





export const defaultItems = [
    {
      name: 'Injectables',
      icon: Injection,
      key: 1,
      active: false,
      category: [
        {
          key: 1,
          name: 'Botox',
          icon: Injection,
          video: true,
          rdmValue: 3,
          active: false,
          subCategory: [
            {
              key: 1,
              name: 'Botox 1 Area',
              time: '40',
              rating: 5,
              price: '65-85',
              online: false,
              selected: false,
              review: 14,
              is_bundle: true,
            },
            {
              key: 2,
              name: 'Botox 2 Area',
              time: '40',
              rating: 5,
              price: '65-85',
              online: false,
              selected: false,
              review: 89,
              is_bundle: false,
            },
            {
              key: 3,
              name: 'Botox 3 Area',
              time: '40',
              rating: 5,
              price: '65-85',
              online: false,
              selected: false,
              review: 5,
              is_bundle: true,
            },
            {
              key: 4,
              name: 'Online Botox Consultation',
              time: '40',
              rating: 5,
              price: '50',
              online: true,
              selected: false,
              review: 10,
              is_bundle: false,
            },
          ],
        },
        {
          key: 2,
          name: 'Filler',
          icon: Injection,
          video: true,
          rdmValue: 3,
          active: false,
          subCategory: [
            {
              key: 1,
              name: 'Lip Filler',
              time: '40',
              rating: 5,
              price: '65-85',
              online: true,
              selected: false,
              review: 53,
              is_bundle: true,
            },
            {
              key: 2,
              name: 'Filler Consultation',
              time: '40',
              rating: 5,
              price: '65-85',
              online: false,
              selected: false,
              review: 18,
              is_bundle: false,
            },
            {
              key: 3,
              name: 'Online Fillers',
              time: '40',
              rating: 5,
              price: '65-85',
              online: true,
              selected: false,
              review: 56,
              is_bundle: true,
            },
          ],
        },
      ],
    },
    {
      name: 'Face',
      icon: Facial,
      key: 2,
      active: false,
      category: [
        {
          key: 1,
          name: 'Face Peel',
          icon: Facial,
          video: false,
          active: false,
          rdmValue: 2,
          subCategory: [
            {
              key: 1,
              time: '40',
              rating: 5,
              price: '65-85',
              name: 'Chemical Peel',
              selected: false,
              review: 14,
              is_bundle: false,
            },
            {
              key: 2,
              name: 'Perfect Peel',
              time: '40',
              rating: 5,
              price: '65-85',
              selected: false,
              review: 96,
              is_bundle: true,
            },
          ],
        },
        {
          key: 2,
          name: 'Microdermabrasion',
          icon: Facial,
          video: true,
          rdmValue: 4,
          active: false,
          subCategory: [
            {
              key: 1,
              name: 'Microdermabrasion Treatment',
              time: '40',
              rating: 5,
              price: '65-85',
              online: false,
              selected: false,
              review: 85,
              is_bundle: true,
            },
            {
              key: 2,
              name: 'Consultation',
              time: '40',
              rating: 5,
              price: '65-85',
              online: true,
              selected: false,
              review: 30,
              is_bundle: false,
            },
            {
              key: 3,
              name: 'Microdermabrasion',
              time: '40',
              rating: 5,
              price: '65-85',
              online: false,
              selected: false,
              review: 30,
              is_bundle: true,
            },
            {
              key: 4,
              name: 'M-Treatment',
              time: '40',
              rating: 5,
              price: '65-85',
              online: true,
              selected: false,
              review: 30,
              is_bundle: false,
            },
          ],
        },
      ],
    },
    {
      name: 'Spa',
      icon: Spa,
      key: 3,
      active: false,
      category: [
        {
          key: 1,
          name: 'Massage',
          icon: Spa,
          video: false,
          rdmValue: 2,
          active: false,
          subCategory: [
            {
              key: 1,
              name: 'Full Boday Massage',
              time: '40',
              rating: 5,
              price: '65-85',
              selected: false,
              review: 52,
              is_bundle: true,
            },
            {
              key: 2,
              name: 'Back Massage',
              time: '40',
              rating: 5,
              price: '65-85',
              selected: false,
              review: 47,
              is_bundle: false,
            },
          ],
        },
        {
          key: 2,
          name: 'Facial',
          icon: Spa,
          video: true,
          rdmValue: 2,
          active: false,
          subCategory: [
            {
              key: 1,
              name: 'Online-Hydrafacial',
              time: '40',
              rating: 5,
              price: '65-85',
              online: true,
              selected: false,
              review: 48,
              is_bundle: true,
            },
            {
              key: 2,
              name: 'Hydrafacial',
              time: '40',
              rating: 5,
              price: '65-85',
              online: false,
              selected: false,
              review: 48,
              is_bundle: false,
            },
          ],
        },
        {
          key: 3,
          name: 'Nail Bar',
          icon: Spa,
          video: false,
          rdmValue: 2,
          active: false,
          subCategory: [
            {
              key: 1,
              name: 'Manicure',
              time: '40',
              rating: 5,
              price: '65-85',
              selected: false,
              review: 65,
              is_bundle: true,
            },
            {
              key: 2,
              name: 'Manicure-1',
              time: '40',
              rating: 5,
              price: '65-85',
              selected: false,
              review: 65,
              is_bundle: false,
            },
          ],
        },
      ],
    },
    {
      name: 'Dematology',
      icon: SkinnProblem,
      key: 4,
      active: false,
      category: [
        {
          key: 1,
          name: 'skin',
          icon: SkinnProblem,
          video: false,
          rdmValue: 3,
          active: false,
          subCategory: [
            {
              key: 1,
              name: 'skin 1',
              time: '40',
              rating: 5,
              price: '65-85',
              selected: false,
              review: 63,
              is_bundle: true,
            },
            {
              key: 2,
              name: 'skin 2',
              time: '40',
              rating: 5,
              price: '65-85',
              selected: false,
              review: 17,
              is_bundle: false,
            },
            {
              key: 3,
              name: 'Laser',
              time: '40',
              rating: 5,
              price: '65-85',
              selected: false,
              review: 25,
              is_bundle: true,
            },
          ],
        },
        {
          key: 2,
          name: 'hair',
          icon: SkinnProblem,
          video: true,
          rdmValue: 3,
          active: false,
          subCategory: [
            {
              key: 1,
              name: 'hair 1',
              time: '40',
              rating: 5,
              price: '65-85',
              online: true,
              selected: false,
              review: 5,
              is_bundle: true,
            },
            {
              key: 2,
              name: 'hair 2',
              time: '40',
              rating: 5,
              price: '65-85',
              online: true,
              selected: false,
              review: 63,
              is_bundle: false,
            },
            {
              key: 3,
              name: 'hair 1',
              time: '40',
              rating: 5,
              price: '65-85',
              online: false,
              selected: false,
              review: 63,
              is_bundle: true,
            },
          ],
        },
      ],
    },
    {
      name: 'Acne treatment',
      icon: Acne,
      key: 5,
      active: false,
      category: [
        {
          key: 1,
          name: 'Spot',
          icon: Acne,
          video: true,
          rdmValue: 4,
          active: false,
          subCategory: [
            {
              key: 1,
              name: 'Online-spot 1',
              time: '40',
              rating: 5,
              price: '65-85',
              online: true,
              selected: false,
              review: 85,
              is_bundle: true,
            },
            {
              key: 2,
              name: 'spot 1',
              time: '40',
              rating: 5,
              price: '65-85',
              online: false,
              selected: false,
              review: 74,
              is_bundle: false,
            },
            {
              key: 3,
              name: 'Online-spot 2',
              time: '40',
              rating: 5,
              price: '65-85',
              online: true,
              selected: false,
              review: 74,
              is_bundle: true,
            },
            {
              key: 4,
              name: 'spot 2',
              time: '40',
              rating: 5,
              price: '65-85',
              online: false,
              selected: false,
              review: 74,
              is_bundle: false,
            },
          ],
        },
        {
          key: 2,
          name: 'Tweak',
          icon: Acne,
          video: false,
          active: false,
          rdmValue: 2,
          subCategory: [
            {
              key: 1,
              name: 'tweak 1',
              time: '40',
              rating: 5,
              price: '65-85',
              selected: false,
              review: 3,
              is_bundle: false,
            },
            {
              key: 2,
              name: 'tweak 2',
              time: '40',
              rating: 5,
              price: '65-85',
              selected: false,
              review: 36,
              is_bundle: true,
            },
          ],
        },
      ],
    },
    {
      name: 'Hydrafacial',
      icon: Moistuire,
      key: 6,
      active: false,
      category: [
        {
          key: 1,
          name: 'deep-clean',
          icon: Moistuire,
          video: true,
          rdmValue: 2,
          active: false,
          subCategory: [
            {
              key: 1,
              name: 'deep-clean 1',
              time: '40',
              rating: 4,
              online: true,
              price: '65-85',
              selected: false,
              review: 96,
              is_bundle: false,
            },
            {
              key: 2,
              name: 'deep-clean 2',
              time: '40',
              rating: 3,
              price: '65-85',
              online: false,
              selected: false,
              review: 74,
              is_bundle: true,
            },
          ],
        },
        {
          key: 2,
          name: 'dryness',
          icon: Moistuire,
          video: true,
          rdmValue: 2,
          active: false,
          subCategory: [
            {
              key: 1,
              name: 'dryness 2',
              time: '40',
              rating: 2,
              price: '65-85',
              online: true,
              selected: false,
              review: 23,
              is_bundle: true,
            },
            {
              key: 2,
              name: 'dryness 1',
              time: '40',
              rating: 4,
              price: '65-85',
              online: false,
              selected: false,
              review: 63,
              is_bundle: false,
            },
          ],
        },
      ],
    },
  ]

